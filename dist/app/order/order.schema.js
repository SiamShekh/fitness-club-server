"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModels = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
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
        phone: {
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
        phone: {
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
exports.UserModels = (0, mongoose_1.model)("user", UserSchema);
