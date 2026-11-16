import express from "express";
import cors from "cors";
import { gameController } from "./controller";
import { appConfig } from "./app-config";

class App{
    public start():void{

        const server = express();
        server.use(cors());
        server.use(express.json());
        server.use(gameController.router);
        server.listen(appConfig.port, () => console.log("Listening..."));
    }
}

const app = new App();
app.start();