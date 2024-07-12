import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const no_routes = (req: Request, res: Response, next: NextFunction) => {
    return res.status(httpStatus.NOT_FOUND).send({
        msg: 'No route found on this endpoints',
        status: httpStatus.NOT_FOUND,
        data: []
    })
};

export default no_routes;