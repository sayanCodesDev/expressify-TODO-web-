import zod from "zod";

interface u{
    name:string,
    email:string,
    password:string
}

export function validateUser(u:u) {
    const user = zod.object({
        name: zod.string(),
        email: zod.email(),
        password: zod.string().min(5)
    })

    return user.safeParse(u)
}