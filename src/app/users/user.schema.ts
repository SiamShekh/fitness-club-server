import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
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
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
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
    isDelete: {
        type: Boolean,
        required: true
    },
    isBlock: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

UserSchema.pre("save", async function (next) {
    const user = this;
    const isUser = await UserModels.findOne({ $or: [{ email: user?.email }, { phone: user?.phone }] });

    if (isUser == null) {
        const hash = await bcrypt.hash(user?.password as string, Number(envoroments.salt));
        user.password = hash;

        next();
    } else {
        throw new Error("User already exist!")
    }
})

export const UserModels = model("user", UserSchema);