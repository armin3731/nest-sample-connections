import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

// create a logger
const logger = new Logger('Microservice1');


// Create the Microservice options object
const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
    // port: 6379
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions)
  // await app.listen(() => {
  //   logger.log('Microservice1 is listening...');
  // });
  
  app.listen().then(()=>{
    logger.log('Microservice1 is running...')
  });
}
bootstrap();
