import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mathService: MathService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]){
    //Define the logic to be executed
    console.log('Adding ' + data);
    return this.mathService.accumulate(data);

  }
}
