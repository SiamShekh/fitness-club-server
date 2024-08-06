"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ZodVaildationCheck_1 = __importDefault(require("../config/ZodVaildationCheck"));
const review_zod_1 = require("../app/reviews/review.zod");
const review_controller_1 = require("../app/reviews/review.controller");
const ReviewRoutes = express_1.default.Router();
ReviewRoutes.post('/create-review', (0, ZodVaildationCheck_1.default)(review_zod_1.ReviewZod), review_controller_1.CreateReview);
exports.default = ReviewRoutes;
