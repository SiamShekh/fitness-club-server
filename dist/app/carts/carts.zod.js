"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsZod = void 0;
const zod_1 = require("zod");
exports.CartsZod = zod_1.z.object({
    user: zod_1.z.string(),
    product: zod_1.z.string(),
    price: zod_1.z.string(),
    discount: zod_1.z.number(),
    deliveryAddress: zod_1.z.object({
        FullName: zod_1.z.string(),
        Phone: zod_1.z.string(),
        Area: zod_1.z.string(),
        Address: zod_1.z.string()
    }),
    thumnail: zod_1.z.string(),
    isCancel: zod_1.z.boolean()
});
