// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();


import { ClientOptions, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";

const logger = new Logger('Client');


const microserveiceOptions: ClientOptions = {
    transport: Transport.TCP,
    options: {
        host: 'localhost',
        port: 8877,
    }
}



const client = ClientProxyFactory.create(microserveiceOptions);


client
    // .send<ReturnType, ParamType>(pattern, params)
    .send<number, number[]>('add', [1,2,3])
    .subscribe(result => logger.log(result));