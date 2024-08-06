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
exports.cancelProductService = exports.CreateCartsService = void 0;
const carts_schema_1 = require("./carts.schema");
const CreateCartsService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carts_schema_1.CartsModels.create(Object.assign(Object.assign({}, payload), { isCancel: false }));
    return result;
});
exports.CreateCartsService = CreateCartsService;
const cancelProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carts_schema_1.CartsModels.findByIdAndUpdate(id, { $set: { isCancel: true } });
    return result;
});
exports.cancelProductService = cancelProductService;
