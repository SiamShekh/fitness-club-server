"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const zod_1 = require("zod");
const globalError = (err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({
            msg: err,
            status: http_status_1.default.INTERNAL_SERVER_ERROR,
            data: []
        });
    }
    return res.status(http_status_1.default.NOT_FOUND).send({
        msg: err.message,
        status: http_status_1.default.NOT_FOUND,
        data: []
    });
};
exports.default = globalError;
