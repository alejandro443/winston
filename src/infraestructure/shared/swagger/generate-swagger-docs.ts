import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function GenerateSwaggerDocs(app: INestApplication) {
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
