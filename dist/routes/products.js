"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("../app/products/products.controller");
const ProductsRoutes = express_1.default.Router();
ProductsRoutes.post('/create-products', products_controller_1.CreateNewProducts);
ProductsRoutes.put('/update-products/:id', products_controller_1.UpdateProducts);
ProductsRoutes.delete('/delete-products/:id', products_controller_1.softDeleteProducts);
ProductsRoutes.get('/get-products/:id', products_controller_1.getSingleProducts);
ProductsRoutes.get('/get-all', products_controller_1.getAllProducts);
ProductsRoutes.get('/filter', products_controller_1.filterProduct);
exports.default = ProductsRoutes;
