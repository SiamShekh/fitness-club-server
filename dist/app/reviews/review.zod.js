"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewZod = void 0;
const zod_1 = require("zod");
exports.ReviewZod = zod_1.z.object({
    UserId: zod_1.z.string(),
    ProductId: zod_1.z.string(),
    Rating: zod_1.z.string(),
    Review: zod_1.z.string(),
});
