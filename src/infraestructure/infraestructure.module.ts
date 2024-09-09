import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/module.database';
import { ExternalServiceModule } from './external-services/external_service.module';

@Module({
  imports: [DatabaseModule],
  providers: [ExternalServiceModule],
  exports: [ExternalServiceModule],
})
export class InfraestructureModule {}
