"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZodVaildationCheck = (schema) => {
    return (req, res, next) => {
        schema.parse(req.body);
        next();
    };
};
exports.default = ZodVaildationCheck;
