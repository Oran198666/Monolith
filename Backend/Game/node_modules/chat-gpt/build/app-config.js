"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ quiet: true, path: path_1.default.join(__dirname, "../../../.env") });
class AppConfig {
    openaiApiKey = process.env.OPENAI_API_KEY;
}
exports.appConfig = new AppConfig();
