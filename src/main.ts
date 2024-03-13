import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GenerateSwaggerDocs } from './infraestructure/shared/swagger/generate-swagger-docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  GenerateSwaggerDocs(app);

  await app.listen(5555);
}
bootstrap();
