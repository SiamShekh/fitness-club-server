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
exports.filterProduct = exports.getAllProducts = exports.getSingleProducts = exports.softDeleteProducts = exports.UpdateProducts = exports.CreateNewProducts = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../config/CatchAsync"));
const products_service_1 = require("./products.service");
const products_schema_1 = require("./products.schema");
exports.CreateNewProducts = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, products_service_1.CreateProductsService)(req.body);
    return res.status(http_status_1.default.OK).json({
        msg: 'new products created!',
        status: http_status_1.default.OK,
        data: result
    });
}));
exports.UpdateProducts = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, products_service_1.updateProductService)(req.body, req.params.id);
    if (result == null) {
        return res.status(http_status_1.default.OK).json({
            msg: `Product not found!`,
            status: http_status_1.default.NOT_FOUND,
            data: result
        });
    }
    else {
        return res.status(http_status_1.default.OK).json({
            msg: `${result === null || result === void 0 ? void 0 : result.name} just updated!`,
            status: http_status_1.default.OK,
            data: result
        });
    }
}));
exports.softDeleteProducts = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_schema_1.ProductModels.findByIdAndUpdate(req.params.id, { $set: { isDelete: true } });
    if (result == null) {
        return res.status(http_status_1.default.OK).json({
            msg: `Product not found!`,
            status: http_status_1.default.OK,
            data: result
        });
    }
    else {
        return res.status(http_status_1.default.OK).json({
            msg: `${result === null || result === void 0 ? void 0 : result.name} just delete!`,
            status: http_status_1.default.OK,
            data: result
        });
    }
}));
exports.getSingleProducts = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield products_schema_1.ProductModels.findById(id);
    if (result == null) {
        return res.status(http_status_1.default.OK).json({
            msg: `Product not found!`,
            status: http_status_1.default.NOT_FOUND,
            data: result
        });
    }
    else {
        return res.status(http_status_1.default.OK).json({
            msg: `${result === null || result === void 0 ? void 0 : result.name} just retrive!`,
            status: http_status_1.default.OK,
            data: result
        });
    }
}));
exports.getAllProducts = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_schema_1.ProductModels.find({
        isDelete: false,
        stock: { $gt: 0 }
    }).limit(100);
    return res.status(http_status_1.default.OK).json({
        msg: `just updated!`,
        status: http_status_1.default.OK,
        data: result
    });
}));
exports.filterProduct = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * name
     * category
     * price
     */
    // ?searchItem=name&category=cat&price=908
    const name = req.query.name;
    const category = req.query.category;
    const priceStart = req.query.priceStart;
    const priceEnd = req.query.priceEnd;
    const payload = {
        name,
        category,
        priceStart,
        priceEnd
    };
    const filter = yield (0, products_service_1.FilterProductServices)(payload);
    if (filter == null) {
        return res.status(http_status_1.default.OK).json({
            msg: `Product not found!`,
            status: http_status_1.default.NOT_FOUND,
            data: filter
        });
    }
    else {
        return res.status(http_status_1.default.OK).json({
            msg: `Product retrieved successfully.`,
            status: http_status_1.default.OK,
            data: filter
        });
    }
}));
