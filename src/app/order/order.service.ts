import { compare } from "bcrypt";
import { Tuser } from "./order.interface";
import { UserModels } from "./order.schema";

export const CreateOrderService = async (payload: Tuser) => {
    const result = await UserModels.create({ ...payload, isBlock: false, isDelete: false });
    return result;
};
