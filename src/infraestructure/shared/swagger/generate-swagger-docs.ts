import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { config } from 'dotenv';
import { DEVELOPMENT } from '@src/infraestructure/persistence/constants/constants';
config();

const SWAGGER_ENVS = ['test'];

export function GenerateSwaggerDocs(app: INestApplication) {
  const processenv: any = process.env;

  if (SWAGGER_ENVS.includes(processenv.NODE_ENV)) {
    app.use(
      ['/api-docs'],
      basicAuth({
        challenge: true,
        users: {
          ['cudesi_development']: 'cudesi_development_2024',
        },
      }),
    );
  }

  if (processenv.NODE_ENV == DEVELOPMENT || SWAGGER_ENVS.includes(processenv.NODE_ENV) ) {
    const config = new DocumentBuilder()
      .setTitle('Fhyona Backend')
      .setDescription(
        'Proyecto de Fhyona 2.0 que integra muchas nuevas funcionalidades.',
      )
      .setVersion('2.0.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }
}
