import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

// create a logger
const logger = new Logger('Microservice1');


// Create the Microservice options object
const microserviceOptions = {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions)
  
  app.listen().then(()=>{
    logger.log('Microservice1 is running...')
  });
}
bootstrap();
