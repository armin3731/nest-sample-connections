import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';
import { GrpcMethod } from '@nestjs/microservices';


// Defineing gRPC Interfaces
interface INumberArray{
  data: number[];
}
interface ISumOfNumberArray{
  sum: number;
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mathService: MathService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Define the message pattern for this method
  @GrpcMethod('AppController','Accumulate')
  accumulate_remote(numberArray: INumberArray, metadata: any): ISumOfNumberArray{
    console.log('Adding' + numberArray.data.toString());
    return { sum: this.mathService.accumulate(numberArray.data)}
  }
}
