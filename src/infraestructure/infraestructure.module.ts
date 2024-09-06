import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/module.database';

@Module({
  providers: [],
  exports: [],
  imports: [DatabaseModule],
})
export class InfraestructureModule {}
