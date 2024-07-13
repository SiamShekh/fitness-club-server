import mongoose, { model, Schema, Types } from "mongoose";
import { TProducts } from "./products.interface";
import { boolean } from "zod";

const ProductsSchema = new Schema<TProducts>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    review: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'review' }],
    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    thumnail: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    isDelete: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

ProductsSchema.pre("save", async function (next) {
    const products = this;
    const isProducts = await ProductModels.findOne({ name: products.name });

    if (isProducts == null) {
        next();
    } else {
        throw new Error("Products already exist!")
    }
})

export const ProductModels = model("product", ProductsSchema);