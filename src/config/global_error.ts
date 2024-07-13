import e, { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ZodError } from "zod";

const globalError = (err: any, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof ZodError) {
        
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            msg: err,
            status: httpStatus.INTERNAL_SERVER_ERROR,
            data: []
        }) 
    }

    return res.status(httpStatus.NOT_FOUND).send({
        msg: err.message,
        status: httpStatus.NOT_FOUND,
        data: []
    })
};

export default globalError;