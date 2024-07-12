import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalError = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(httpStatus.NOT_FOUND).send({
        msg: err.message,
        status: httpStatus.NOT_FOUND,
        data: []
    })
};

export default globalError;