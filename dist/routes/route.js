"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = __importDefault(require("./order"));
const products_1 = __importDefault(require("./products"));
const carts_1 = __importDefault(require("./carts"));
const review_1 = __importDefault(require("./review"));
const Routes = express_1.default.Router();
Routes.use('/order', order_1.default);
Routes.use('/product', products_1.default);
Routes.use('/cart', carts_1.default);
Routes.use('/review', review_1.default);
exports.default = Routes;
