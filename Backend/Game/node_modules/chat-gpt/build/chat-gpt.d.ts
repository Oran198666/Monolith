declare class ChatGpt {
    private openai;
    getCompletion(systemPrompt: string, userPrompt: string): Promise<string>;
    getImageUrl(prompt: string): Promise<string>;
}
export declare const chatGpt: ChatGpt;
export {};
