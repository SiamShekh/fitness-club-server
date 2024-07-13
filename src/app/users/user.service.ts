import { compare } from "bcrypt";
import { Tuser } from "./user.interface";
import { UserModels } from "./user.schema";
import jwt from 'jsonwebtoken';
import envoroments from "../../config/_ENV";

export const CreateNewUserService = async (payload: Tuser) => {
    const result = await UserModels.create({ ...payload, isBlock: false, isDelete: false });
    return result;
};

export const LoginUserByEmail = async (email: String, password: String) => {
    const findUser = await UserModels.findOne({ email });
    if (findUser != null) {
        const isCurrectPasswords = await compare(password as string, findUser.password as string);
        if (isCurrectPasswords) {
            const payloads = {
                email: findUser.email,
                role: findUser.role,
            }
            const accessToken = jwt.sign(payloads, envoroments.accessScrect as string, {
                expiresIn: envoroments.accessExpire
            });
            return { accessToken }
        } else {
            throw new Error("User credentials don't match the existing ones.")
        }
    } else {
        throw new Error("User credentials could not be found.")
    }
}