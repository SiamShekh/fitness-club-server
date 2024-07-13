import { Response, Request } from "express"
import CatchAsync from "../../config/CatchAsync"
import { CreateNewUserService, LoginUserByEmail } from "./user.service";
import httpStatus from "http-status";
import { UserModels } from "./user.schema";

export const CreateNewUser = CatchAsync(async (req: Request, res: Response) => {
    const result = await CreateNewUserService(req.body);
    return res.status(httpStatus.OK).json({
        msg: 'new user created!',
        status: httpStatus.OK,
        data: result
    });
});

export const LoginExistUser = CatchAsync(async (req: Request, res: Response) => {
    const result = await LoginUserByEmail(req.body.email, req.body.password);
    return res.status(httpStatus.OK).json({
        msg: `${req.body.email} is logged in with correct credentials.`,
        status: httpStatus.OK,
        data: result
    });
});

export const GetUserDataByEmails = CatchAsync(async (req: Request, res: Response) => {
    const email = req.params.email;
    const result = await UserModels.findOne({ email });
    if (result != null) {
        return res.status(httpStatus.OK).json({
            msg: `Retrieve ${email} user data.`,
            status: httpStatus.OK,
            data: result
        });
    } else {
        return res.status(httpStatus.OK).json({
            msg: `The user is not exists on our database`,
            status: httpStatus.OK,
            data: []
        });
    }
})