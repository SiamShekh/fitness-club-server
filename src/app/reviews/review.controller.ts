import { Response, Request } from "express"
import CatchAsync from "../../config/CatchAsync"
import httpStatus from "http-status";
import { CreateNewReview } from "./review.service";

export const CreateReview = CatchAsync(async (req: Request, res: Response) => {

    const result = await CreateNewReview(req.body);
    return res.status(httpStatus.OK).json({
        msg: 'new review created!',
        status: httpStatus.OK,
        data: result
    });
});
