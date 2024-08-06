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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProductServices = exports.updateProductService = exports.CreateProductsService = void 0;
const products_schema_1 = require("./products.schema");
const CreateProductsService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_schema_1.ProductModels.create(Object.assign(Object.assign({}, payload), { isDelete: false }));
    return result;
});
exports.CreateProductsService = CreateProductsService;
const updateProductService = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_schema_1.ProductModels.findByIdAndUpdate(id, { $set: Object.assign({}, payload) });
    return result;
});
exports.updateProductService = updateProductService;
const FilterProductServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const filterByName = yield products_schema_1.ProductModels.find({
        $and: [
            { name: { $regex: payload.name || "" } },
            { category: { $regex: payload.category || "" } },
            {}
        ]
    }).find({
        isDelete: false,
        stock: { $gt: 0 }
    }).limit(100);
    return filterByName;
});
exports.FilterProductServices = FilterProductServices;
