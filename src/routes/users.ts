import Express from "express";
import { CreateNewUser, GetUserDataByEmails, LoginExistUser } from "../app/users/user.controller";
import ZodVaildationCheck from "../config/ZodVaildationCheck";
import { UserZod } from "../app/users/user.zod";
const UserRoutes = Express.Router();

UserRoutes.post('/create-user', ZodVaildationCheck(UserZod), CreateNewUser);
UserRoutes.post('/login-user', LoginExistUser);
UserRoutes.get('/user-by-email/:email', GetUserDataByEmails);


export default UserRoutes;