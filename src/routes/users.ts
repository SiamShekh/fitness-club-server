import Express from "express";
import { CreateNewUser } from "../app/users/user.controller";
import ZodVaildationCheck from "../config/ZodVaildationCheck";
import { UserZod } from "../app/users/user.zod";
const UserRoutes = Express.Router();

UserRoutes.get('/create-user', ZodVaildationCheck(UserZod), CreateNewUser);

export default UserRoutes;