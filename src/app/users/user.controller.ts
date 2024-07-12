import { Response, Request } from "express"
import CatchAsync from "../../config/CatchAsync"

export const CreateNewUser = CatchAsync(async(req: Request, res: Response) => {
    throw new Error('ma')
    return await res.send('i am there')
})