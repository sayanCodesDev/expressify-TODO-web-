import "dotenv/config";
import express from 'express';

import { prisma } from "../lib/prisma";
import { validateUser } from "../validation/validateCredentials"

const app = express()
app.use(express.json())


app.post("/signup", async (req: express.Request, res: express.Response) => {
    const name: string = req.body.name
    const email: string = req.body.email
    const password: string = req.body.password


    if (validateUser({ name, email, password }).success) {
        try {
            const User = await prisma.user.create({
                data: {
                    name,
                    email,
                    password
                },
            })
            console.log(User)
            res.status(200).json({ message: "user created" })

        } catch (error) {
            console.log(error)
            res.json({ error })
        }

    } else {
        console.log(validateUser({ name, email, password }))
        res.status(500).json(validateUser({ name, email, password }))
    }

})
app.post("/user/todo/:email", async (req: express.Request<{ email: string }>, res: express.Response) => {
    const title: string = req.body.title
    const description: string = req.body.description

    const email = req.params.email;

    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            user: {
                connect: { email: email }
            },
        },
        select: {
            userEmail: true,
            title: true,
            description: true
        }
    })
    res.json(todo)

})

app.get("/user/todos/:email", async (req: express.Request<{ email: string }>, res: express.Response) => {

    const email = req.params.email;

    if (!email) {
        res.json({ msg: "need email" })
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            name: true,
            email: true
        }
    })
    res.json(user)
})

app.listen(process.env.PORT, () => {
    console.log(`Server Started ${process.env.PORT}`)
})
