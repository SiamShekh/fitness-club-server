import { z } from "zod";

export const ProductsZod = z.object({
    name: z.string(),
    price: z.string(),
    category: z.string(),
    description: z.string(),
    discount: z.number(),
    stock: z.number(),
    thumnail: z.string(),
    image: z.array(z.string())
})