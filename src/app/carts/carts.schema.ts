import mongoose, { model, Schema, Types } from "mongoose";
import { TCarts } from "./carts.interface";
import { boolean } from "zod";

const CartsSchema = new Schema<TCarts>({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    deliveryAddress: {
        FullName: {
            type: String,
            required: true
        },
        Phone: {
            type: String,
            required: true
        },
        Area: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
    },

    discount: {
        type: Number,
        required: true
    },

    thumnail: {
        type: String,
        required: true
    },
    isCancel: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

CartsSchema.pre("save", async function (next) {
    const carts = this;
    const isCarts = await CartsModels.findOne({ user: carts.user, product: carts.product });

    if (isCarts == null) {
        next();
    } else {
        throw new Error("Already Products in carts!")
    }
})

export const CartsModels = model("cart", CartsSchema);