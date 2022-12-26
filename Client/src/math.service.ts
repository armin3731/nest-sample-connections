import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";



@Injectable()
export class MathService {
  private client: ClientProxy;

  
  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379
      }
    })
  }
  



  public accumulate_remote(data: number[]) {
    return this.client
                  .send<number, number[]>('add', data)
                  // .subscribe(result => console.log(result))
  }
}



// ===============================================
// // To send a message using a Client
// client
// .send<number, number[]>('add', [1,2,3])
// .subscribe(result => logger.log(result))
// ===============================================
