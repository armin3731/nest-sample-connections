export declare class AppController {
    private client;
    private grpcService;
    onModuleInit(): void;
    getHello(): string;
    accumulate(data: number[]): Promise<import("rxjs").Observable<any>>;
}
