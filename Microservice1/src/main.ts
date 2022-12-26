import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

// create a logger
const logger = new Logger('Microservice1');


// Create the Microservice options object
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto')
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions)
  
  app.listen().then(()=>{
    logger.log('Microservice1 is running...')
  });
}
bootstrap();
