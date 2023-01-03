import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';



@Controller()
export class AppController {
  private client: ClientProxy;
  

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://localhost:1883',
      }
    })
  }



  @Get()
  getHello(): string {
    return "Hello World From Text!!";
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]){
    //Define the logic to be executed
    console.log('Sending data ... ' + data);
    return this.client.send<number, number[]>('add', data)

  }
}
