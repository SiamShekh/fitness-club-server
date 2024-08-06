"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const envoroments = {
    port: process.env.PORT,
    mongodb: process.env.MONGODB,
    salt: process.env.SALT,
    accessScrect: process.env.ACCESS_SECRECT,
    accessExpire: process.env.ACCESS_EXPIRE
};
exports.default = envoroments;
