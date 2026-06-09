import express from 'express';
import { prisma } from "../lib/prisma";
import { validateUser } from "../validation/validateCredentials"
const app = express()

app.use(express.json())

app.get("/todos", () => {

})

app.post("/signup", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password


    if (validateUser({ name, email, password }).success) {

        try {const User = await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        })
        console.log(User)
        res.status(200).json({ message: "user created" })
        
    }catch(error){
        console.log(error)
        res.json({error})
    }

    } else {
        console.log(validateUser({ name, email, password }))
        res.status(500).json(validateUser({ name, email, password }))
    }

})



app.listen(3000, () => {
    console.log("Server Started")
})
