"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const controller_1 = require("./controller");
const app_config_1 = require("./app-config");
class App {
    start() {
        const server = (0, express_1.default)();
        server.use((0, cors_1.default)());
        server.use(express_1.default.json());
        server.use(controller_1.gameController.router);
        server.listen(app_config_1.appConfig.port, () => console.log("Listening..."));
    }
}
const app = new App();
app.start();
