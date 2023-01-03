import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';
import { Ctx, GrpcMethod, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';


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
  @MessagePattern('add')
  accumulate_remote(@Payload() data: number[], @Ctx() context: RmqContext){
    console.log(`Adding... ${data}`);
    return { sum: this.mathService.accumulate(data)}
  }

}
