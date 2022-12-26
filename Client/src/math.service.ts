import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";




// const microserveiceOptions: ClientOptions = {
//   transport: Transport.TCP,
//   options: {
//       host: 'localhost',
//       port: 8877,
//   }
// }



// const client = ClientProxyFactory.create(microserveiceOptions);


@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8877
    }})
  }



  public accumulate_remote(data: number[]) {
    return this.client.send<number, number[]>('add', data)
  }
}



// ===============================================
// // To send a message using a Client
// client
// .send<number, number[]>('add', [1,2,3])
// .subscribe(result => logger.log(result))
// ===============================================
