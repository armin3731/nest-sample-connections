import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

// create a logger
const logger = new Logger('Main');


// Create the Microservice options object
const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8877
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions)
  // app.listen(() => {
  //   logger.log('Microservice1 is listening...');
  // });
  app.listen();
}
bootstrap();
