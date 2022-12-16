import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const kafkaConsumerService = app.get(KafkaConsumerService);

  app.useGlobalPipes(new ValidationPipe());
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService,
  });

  dotenv.config();

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
