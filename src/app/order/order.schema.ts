import { model, Schema } from "mongoose";
import { Tuser } from "./order.interface";
import bcrypt from "bcrypt";
import envoroments from "../../config/_ENV";

const UserSchema = new Schema<Tuser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    shiping: {
        street_address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postal: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    billing: {
        street_address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postal: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    }
}, {
    timestamps: true
});

export const UserModels = model("order", UserSchema);