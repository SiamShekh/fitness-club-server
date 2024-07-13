import { TCarts } from "./carts.interface";
import { CartsModels } from "./carts.schema";

export const CreateCartsService = async (payload: TCarts) => {
    const result = await CartsModels.create({ ...payload, isCancel: false });

    return result;
};

export const cancelProductService = async ( id: String) => {
    const result = await CartsModels.findByIdAndUpdate(id, { $set: { isCancel: true } });

    return result;
}
