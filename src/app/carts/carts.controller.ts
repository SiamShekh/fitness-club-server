import { Response, Request } from "express"
import httpStatus from "http-status";
import CatchAsync from "../../config/CatchAsync";
import { cancelProductService, CreateCartsService } from "./products.service";

export const CreateNewCarts = CatchAsync(async (req: Request, res: Response) => {
    const result = await CreateCartsService(req.body);
    return res.status(httpStatus.OK).json({
        msg: 'new carts created!',
        status: httpStatus.OK,
        data: result
    });
});

export const CancelProductOrder = CatchAsync(async (req: Request, res: Response) => {
    const result = await cancelProductService(req.params.id);
    if (result == null) {
        return res.status(httpStatus.OK).json({
            msg: `Carts not found!`,
            status: httpStatus.NOT_FOUND,
            data: result
        });
    } else {
        return res.status(httpStatus.OK).json({
            msg: `cart was cancel!`,
            status: httpStatus.OK,
            data: result
        });
    }
});
