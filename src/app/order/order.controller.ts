import { Response, Request } from "express"
import CatchAsync from "../../config/CatchAsync"
import {  CreateOrderService } from "./order.service";
import httpStatus from "http-status";

export const CreateNewOrder = CatchAsync(async (req: Request, res: Response) => {
    const result = await CreateOrderService(req.body);
    return res.status(httpStatus.OK).json({
        msg: 'new order created!',
        status: httpStatus.OK,
        data: result
    });
});
