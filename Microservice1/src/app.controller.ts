import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mathService: MathService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Define the message pattern for this method
  @MessagePattern('add')
  async accumulate(data: number[]){
    //Define the logic to be executed
    console.log('Adding ' + data);
    return this.mathService.accumulate(data);

  }
}
