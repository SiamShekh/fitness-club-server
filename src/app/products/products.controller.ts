import { Response, Request } from "express"
import httpStatus from "http-status";
import CatchAsync from "../../config/CatchAsync";
import { CreateProductsService, FilterProductServices, updateProductService } from "./products.service";
import { ProductModels } from "./products.schema";
import { TFilterProducts } from "../../Types/InternalTypes";

export const CreateNewProducts = CatchAsync(async (req: Request, res: Response) => {
    const result = await CreateProductsService(req.body);
    return res.status(httpStatus.OK).json({
        msg: 'new products created!',
        status: httpStatus.OK,
        data: result
    });
});

export const UpdateProducts = CatchAsync(async (req: Request, res: Response) => {
    const result = await updateProductService(req.body, req.params.id);
    if (result == null) {
        return res.status(httpStatus.OK).json({
            msg: `Product not found!`,
            status: httpStatus.NOT_FOUND,
            data: result
        });
    } else {
        return res.status(httpStatus.OK).json({
            msg: `${result?.name} just updated!`,
            status: httpStatus.OK,
            data: result
        });
    }
});

export const softDeleteProducts = CatchAsync(async (req: Request, res: Response) => {
    const result = await ProductModels.findByIdAndUpdate(req.params.id, { $set: { isDelete: true } });
    if (result == null) {
        return res.status(httpStatus.OK).json({
            msg: `Product not found!`,
            status: httpStatus.OK,
            data: result
        });
    } else {
        return res.status(httpStatus.OK).json({
            msg: `${result?.name} just delete!`,
            status: httpStatus.OK,
            data: result
        });
    }
});

export const getSingleProducts = CatchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProductModels.findById(id);
    if (result == null) {
        return res.status(httpStatus.OK).json({
            msg: `Product not found!`,
            status: httpStatus.NOT_FOUND,
            data: result
        });
    } else {
        return res.status(httpStatus.OK).json({
            msg: `${result?.name} just retrive!`,
            status: httpStatus.OK,
            data: result
        });
    }
});

export const getAllProducts = CatchAsync(async (req: Request, res: Response) => {
    const result = await ProductModels.find({
        isDelete: false,
        stock: { $gt: 0 }
    }).limit(100);
    return res.status(httpStatus.OK).json({
        msg: `just updated!`,
        status: httpStatus.OK,
        data: result
    });
});

export const filterProduct = CatchAsync(async (req: Request, res: Response) => {
    /**
     * name 
     * category
     * price
     */
    // ?searchItem=name&category=cat&price=908
    const name = req.query.name;
    const category = req.query.category;
    const priceStart = req.query.priceStart;
    const priceEnd = req.query.priceEnd;
    const payload = {
        name,
        category,
        priceStart,
        priceEnd
    };

    const filter = await FilterProductServices(payload as TFilterProducts);
    if (filter == null) {
        return res.status(httpStatus.OK).json({
            msg: `Product not found!`,
            status: httpStatus.NOT_FOUND,
            data: filter
        });
    } else {
        return res.status(httpStatus.OK).json({
            msg: `Product retrieved successfully.`,
            status: httpStatus.OK,
            data: filter
        });
    }
})
