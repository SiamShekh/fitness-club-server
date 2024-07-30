import Express from "express";
import { CreateNewProducts, filterProduct, getAllProducts, getSingleProducts, softDeleteProducts, UpdateProducts } from "../app/products/products.controller";
const ProductsRoutes = Express.Router();

ProductsRoutes.post('/create-products', CreateNewProducts);
ProductsRoutes.put('/update-products/:id', UpdateProducts);
ProductsRoutes.delete('/delete-products/:id', softDeleteProducts);
ProductsRoutes.get('/get-products/:id', getSingleProducts);
ProductsRoutes.get('/get-all', getAllProducts);
ProductsRoutes.get('/filter', filterProduct);


export default ProductsRoutes;