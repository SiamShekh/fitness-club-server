"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ZodVaildationCheck_1 = __importDefault(require("../config/ZodVaildationCheck"));
const carts_zod_1 = require("../app/carts/carts.zod");
const carts_controller_1 = require("../app/carts/carts.controller");
const CartsRoutes = express_1.default.Router();
CartsRoutes.post('/create-order', (0, ZodVaildationCheck_1.default)(carts_zod_1.CartsZod), carts_controller_1.CreateNewCarts);
CartsRoutes.put('/cancel-order/:id', carts_controller_1.CancelProductOrder);
exports.default = CartsRoutes;
