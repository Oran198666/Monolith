"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGpt = void 0;
const openai_1 = __importDefault(require("openai"));
const app_config_1 = require("./app-config");
class ChatGpt {
    openai = new openai_1.default({
        apiKey: app_config_1.appConfig.openaiApiKey
    });
    async getCompletion(systemPrompt, userPrompt) {
        // Request Body
        const body = {
            model: "gpt-5",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ]
        };
        // Send request to OpenAI:
        const response = await this.openai.chat.completions.create(body);
        // Return completion:
        return response.choices[0].message.content;
    }
    async getImageUrl(prompt) {
        // Request Body:
        const body = {
            model: "gpt-image-2",
            prompt
        };
        // Send request to OpenAI:
        const response = await this.openai.images.generate(body);
        // Return image as base64 data url:
        return "data:image/png;base64," + response.data?.[0].b64_json;
    }
}
exports.chatGpt = new ChatGpt();
