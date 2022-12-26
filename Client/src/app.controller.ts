import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mathService_remote: MathService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]){
    //Define the logic to be executed
    console.log('Sending data ... ' + data);
    return this.mathService_remote.accumulate_remote(data);

  }
}
