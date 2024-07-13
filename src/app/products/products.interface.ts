import { Types } from "mongoose";

export interface TProducts {
    name: String,
    price: String,
    category: String,
    description: String,
    review?: [
        String
    ],
    discount: Number,
    stock: Number,
    thumnail: String,
    image: [String],
    isDelete: Boolean
}