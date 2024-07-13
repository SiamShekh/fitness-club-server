import { z } from "zod";

export const CartsZod = z.object({
    user: z.string(),
    product: z.string(),
    price: z.string(),
    discount: z.number(),
    deliveryAddress: z.object({
        FullName: z.string(),
        Phone: z.string(),
        Area: z.string(),
        Address: z.string()
    }),
    thumnail: z.string(),
    isCancel: z.boolean()
})