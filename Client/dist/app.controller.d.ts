import { AppService } from './app.service';
import { MathService } from './math.service';
export declare class AppController {
    private readonly appService;
    private mathService_remote;
    constructor(appService: AppService, mathService_remote: MathService);
    getHello(): string;
    accumulate(data: number[]): Promise<import("rxjs").Observable<number>>;
}
