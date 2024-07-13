import Express from "express";
import ZodVaildationCheck from "../config/ZodVaildationCheck";
import { CartsZod } from "../app/carts/carts.zod";
import { CancelProductOrder, CreateNewCarts } from "../app/carts/carts.controller";
const CartsRoutes = Express.Router();

CartsRoutes.post('/create-order', ZodVaildationCheck(CartsZod), CreateNewCarts);
CartsRoutes.put('/cancel-order/:id', CancelProductOrder);


export default CartsRoutes;