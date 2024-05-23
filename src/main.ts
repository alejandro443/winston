import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GenerateSwaggerDocs } from './infraestructure/shared/swagger/generate-swagger-docs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  GenerateSwaggerDocs(app);

  await app.listen(5555);
}
bootstrap();
