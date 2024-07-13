import Express from "express";
import UserRoutes from "./users";
import ProductsRoutes from "./products";
const Routes = Express.Router();

Routes.use('/user', UserRoutes);
Routes.use('/product', ProductsRoutes);

export default Routes;