import mongoose, { model, Schema } from "mongoose";
import { TReview } from "./review.interface";
import bcrypt from "bcrypt";
import envoroments from "../../config/_ENV";

const ReviewSchema = new Schema<TReview>({
    UserId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    ProductId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    Rating: {
        type: String,
        required: true,
    },
    Review: {
        type: String,
        required: true,
    },
    isDelete: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

ReviewSchema.pre("save", async function (next) {
    const review = this;
    const isReview = await ReviewModels.findOne({ UserId: review.UserId, ProductId: review.ProductId });
    console.log(review);
    
    if (isReview == null) {
        next();
    } else {
        throw new Error("user is already provied a review!")
    }
})

export const ReviewModels = model("review", ReviewSchema);