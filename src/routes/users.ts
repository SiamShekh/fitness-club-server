import Express from "express";
import { CreateNewUser } from "../app/users/user.controller";
const UserRoutes = Express.Router();

UserRoutes.get('/create-user', CreateNewUser);

export default UserRoutes;