import { chatGpt } from "chat-gpt";

class GameService {

    public async getQnA(subject: string): Promise<any> {

        // Get QNA from GPT:
        const systemPrompt = `
            You are an expert in Trivial Pursuit game, in the subject of: '${subject}'.`;

        const userPrompt = `
            Create a Trivial Pursuit game question and four answers.
            The subject is: ${subject}.
            One of the answers must be correct, the other three answers must be wrong.
            Decide randomly which answer is the correct one, and which are the wrong one.
            Response back with only the following JSON format:
            {
                "question": "the-question...",
                "answers": [
                    { "answer": "answer 1...", "isCorrect": true/false },
                    { "answer": "answer 2...", "isCorrect": true/false },
                    { "answer": "answer 3...", "isCorrect": true/false },
                    { "answer": "answer 4...", "isCorrect": true/false }
                ]
            }
        `;

        // Get completion:
        const completion = await chatGpt.getCompletion(systemPrompt, userPrompt);
        return this.sanitize(completion);
    }

    private sanitize(completion: string): any {
        const start = completion.indexOf("{");
        const end = completion.lastIndexOf("}");
        return JSON.parse(completion.substring(start, end + 1));
    }
}

export const gameService = new GameService();