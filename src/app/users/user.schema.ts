import { Schema } from "mongoose";
import { Tuser } from "./user.interface";

const UserModels = new Schema<Tuser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        length: 6
    },
}, {
    timestamps: true
})