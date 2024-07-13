import Express from "express";
import ZodVaildationCheck from "../config/ZodVaildationCheck";
import { ProductsZod } from "../app/products/products.zod";
import { CreateNewProducts, filterProduct, getAllProducts, getSingleProducts, softDeleteProducts, UpdateProducts } from "../app/products/products.controller";
const ProductsRoutes = Express.Router();

ProductsRoutes.post('/create-products', ZodVaildationCheck(ProductsZod), CreateNewProducts);
ProductsRoutes.put('/update-products/:id', UpdateProducts);
ProductsRoutes.delete('/delete-products/:id', softDeleteProducts);
ProductsRoutes.get('/get-products/:id', getSingleProducts);
ProductsRoutes.get('/', getAllProducts);
ProductsRoutes.get('/filter', filterProduct);


export default ProductsRoutes;