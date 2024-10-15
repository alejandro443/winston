import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GenerateSwaggerDocs } from './infraestructure/shared/swagger/generate-swagger-docs';
import { ValidationPipe } from '@nestjs/common';
import { ApplicationCreatorFilter } from './interfaces/exception_filters/application.exception_filter';
import * as bodyParser from 'body-parser';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


    // Configura Winston como el logger global
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.use(bodyParser.json());
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //   }),
  // );

  app.useGlobalFilters(new ApplicationCreatorFilter());
  GenerateSwaggerDocs(app);

  await app.listen(5555);
}
bootstrap();
