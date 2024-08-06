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
exports.CreateNewReview = void 0;
const review_schema_1 = require("./review.schema");
const CreateNewReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield review_schema_1.ReviewModels.create(Object.assign(Object.assign({}, payload), { isDelete: false }));
    return result;
});
exports.CreateNewReview = CreateNewReview;
