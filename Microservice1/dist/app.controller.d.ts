import { AppService } from './app.service';
import { MathService } from './math.service';
export declare class AppController {
    private readonly appService;
    private mathService;
    constructor(appService: AppService, mathService: MathService);
    getHello(): string;
    accumulate(data: number[]): Promise<number>;
}
