"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameController = void 0;
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
class GameController {
    router = express_1.default.Router();
    constructor() {
        this.router.get("/api/game/qna/:subject", this.getQnA);
    }
    async getQnA(request, response, next) {
        try {
            const subject = request.params.subject.toString();
            const qna = await service_1.gameService.getQnA(subject);
            response.json(qna);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.gameController = new GameController();
