import Express from "express";
import ZodVaildationCheck from "../config/ZodVaildationCheck";
import { CreateNewOrder } from "../app/order/order.controller";
const UserRoutes = Express.Router();

UserRoutes.post('/create-order', CreateNewOrder);


export default UserRoutes;