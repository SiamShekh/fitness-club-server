import Express from "express";
import ZodVaildationCheck from "../config/ZodVaildationCheck";
import { ReviewZod } from "../app/reviews/review.zod";
import { CreateReview } from "../app/reviews/review.controller";
const ReviewRoutes = Express.Router();

ReviewRoutes.post('/create-review', ZodVaildationCheck(ReviewZod), CreateReview);


export default ReviewRoutes;