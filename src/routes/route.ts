import Express from "express";
import UserRoutes from "./users";
const Routes = Express.Router();

Routes.use('/user', UserRoutes);

export default Routes;