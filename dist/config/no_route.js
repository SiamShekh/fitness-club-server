"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const no_routes = (req, res, next) => {
    return res.status(http_status_1.default.NOT_FOUND).send({
        msg: 'No route found on this endpoints',
        status: http_status_1.default.NOT_FOUND,
        data: []
    });
};
exports.default = no_routes;
