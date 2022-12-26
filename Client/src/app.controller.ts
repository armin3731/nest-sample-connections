import { Body, Controller, Get, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController {
  @Client(microserviceOptions)  
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  // private grpcdata: INumberArray;

  onModuleInit(){
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Get()
  getHello(): string {
    return "Hello World From Text!!";
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]){
    //Define the logic to be executed
    console.log('Sending data ... ' + data);
    return this.grpcService.accumulate({ data });

  }
}
