import OpenAI from "openai";
import { appConfig } from "./app-config";
import { ChatCompletionCreateParamsNonStreaming, ImageGenerateParamsNonStreaming } from "openai/resources";

class ChatGpt {

    private openai = new OpenAI({
        apiKey: appConfig.openaiApiKey
    });

    public async getCompletion(systemPrompt: string, userPrompt: string): Promise<string> {

        // Request Body
        const body: ChatCompletionCreateParamsNonStreaming = {
            model: "gpt-5",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ]
        };

        // Send request to OpenAI:
        const response = await this.openai.chat.completions.create(body);

        // Return completion:
        return response.choices[0].message.content!;
    }

    public async getImageUrl(prompt: string): Promise<string> {

        // Request Body:
        const body: ImageGenerateParamsNonStreaming = {
            model: "gpt-image-2",
            prompt
        };

        // Send request to OpenAI:
        const response = await this.openai.images.generate(body);

        // Return image as base64 data url:
        return "data:image/png;base64," + response.data?.[0].b64_json;
    }
}

export const chatGpt = new ChatGpt();