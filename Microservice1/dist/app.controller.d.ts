import { AppService } from './app.service';
import { MathService } from './math.service';
interface INumberArray {
    data: number[];
}
interface ISumOfNumberArray {
    sum: number;
}
export declare class AppController {
    private readonly appService;
    private mathService;
    constructor(appService: AppService, mathService: MathService);
    getHello(): string;
    accumulate_remote(numberArray: INumberArray, metadata: any): ISumOfNumberArray;
}
export {};
