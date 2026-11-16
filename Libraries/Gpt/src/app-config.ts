import dotenv from "dotenv";
import path from "path";

dotenv.config({ quiet: true, path: path.join(__dirname, "../../../.env") });

class AppConfig{
    public readonly openaiApiKey = process.env.OPENAI_API_KEY!;
}

export const appConfig = new AppConfig();