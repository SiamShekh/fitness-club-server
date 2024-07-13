import { z } from "zod";

export const UserZod = z.object({
    name: z.string({ required_error: 'must be fill a name...' }),
    email: z.string({ required_error: 'email is a required property!' }).email({ message: 'please provide a vaild email for contiune.' }),
    phone: z.string({ required_error: 'please provide a phone number.' }),
    role: z.enum(["user", "admin"]),
    password: z.string()
})