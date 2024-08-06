"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrder = exports.CreateNewCarts = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../config/CatchAsync"));
const products_service_1 = require("./products.service");
exports.CreateNewCarts = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, products_service_1.CreateCartsService)(req.body);
    return res.status(http_status_1.default.OK).json({
        msg: 'new carts created!',
        status: http_status_1.default.OK,
        data: result
    });
}));
exports.CancelProductOrder = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, products_service_1.cancelProductService)(req.params.id);
    if (result == null) {
        return res.status(http_status_1.default.OK).json({
            msg: `Carts not found!`,
            status: http_status_1.default.NOT_FOUND,
            data: result
        });
    }
    else {
        return res.status(http_status_1.default.OK).json({
            msg: `cart was cancel!`,
            status: http_status_1.default.OK,
            data: result
        });
    }
}));
