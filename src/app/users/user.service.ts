import { Tuser } from "./user.interface";
import { UserModels } from "./user.schema";

export const CreateNewUserService = async (payload: Tuser) => {
    const result = await UserModels.create(payload);

    return result;
}