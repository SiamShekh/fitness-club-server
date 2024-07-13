import { TReview } from "./review.interface";
import { ReviewModels } from "./review.schema";

export const CreateNewReview = async (payload: TReview) => {
    console.log(payload);
    const result = await ReviewModels.create({ ...payload, isDelete: false });
    
    return result;
};
