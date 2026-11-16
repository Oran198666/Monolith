import express, { NextFunction, Request, Response, Router } from "express";
import { gameService } from "./service";

class GameController {

    public router: Router = express.Router();

    public constructor() {
        this.router.get("/api/game/qna/:subject", this.getQnA);
    }

    private async getQnA(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const subject = request.params.subject.toString();
            const qna = await gameService.getQnA(subject);
            response.json(qna);
        }
        catch (err: any) {
            next(err);
        }
    }
}

export const gameController = new GameController();