import { z } from "zod";

export const ReviewZod = z.object({
    UserId: z.string(),
    ProductId: z.string(),
    Rating: z.string(),
    Review: z.string(),
})