declare class GameService {
    getQnA(subject: string): Promise<any>;
    private sanitize;
}
export declare const gameService: GameService;
export {};
