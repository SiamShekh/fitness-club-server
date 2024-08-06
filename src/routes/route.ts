import Express from "express";
import UserRoutes from "./order";
import ProductsRoutes from "./products";
import CartsRoutes from "./carts";
import ReviewRoutes from "./review";
const Routes = Express.Router();

Routes.use('/order', UserRoutes);
Routes.use('/product', ProductsRoutes);
Routes.use('/cart', CartsRoutes);
Routes.use('/review', ReviewRoutes);

export default Routes;