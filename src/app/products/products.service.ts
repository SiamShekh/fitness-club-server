import { TFilterProducts } from "../../Types/InternalTypes";
import { TProducts } from "./products.interface";
import { ProductModels } from "./products.schema";

export const CreateProductsService = async (payload: TProducts) => {
    const result = await ProductModels.create({ ...payload, isDelete: false });
    return result;
};

export const updateProductService = async (payload: Partial<TProducts>, id: String) => {
    const result = await ProductModels.findByIdAndUpdate(id, { $set: { ...payload } });

    return result;
}

export const FilterProductServices = async (payload: TFilterProducts) => {

    const filterByName = await ProductModels.find({
        $and:
            [
                { name: { $regex: payload.name || "" } },
                { category: { $regex: payload.category || "" } },
                {}
            ]
    }).find({
        isDelete: false,
        stock: { $gt: 0 }
    }).limit(100);


    return filterByName;
}