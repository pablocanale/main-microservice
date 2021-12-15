import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { appendFile } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000'
  })
  await app.listen(3001);
}
bootstrap();
