import { Response, Request } from "express"
import CatchAsync from "../../config/CatchAsync"
import { CreateNewUserService } from "./user.service";
import httpStatus from "http-status";

export const CreateNewUser = CatchAsync(async (req: Request, res: Response) => {
    const result = await CreateNewUserService(req.body);
    return res.status(httpStatus.OK).json({
        msg: 'new user created!',
        status: httpStatus.OK,
        data: result
    });
})