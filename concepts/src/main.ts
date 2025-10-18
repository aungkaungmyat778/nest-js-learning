import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// This is the entry point of your nest js application

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Globally setting
  //env
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
