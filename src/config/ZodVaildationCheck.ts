import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

const ZodVaildationCheck = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        schema.parse(req.body);
        next();
    }
};

export default ZodVaildationCheck;