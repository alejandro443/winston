import { Module } from '@nestjs/common';
import { InterfacesModule } from './interfaces/interfaces.module';
import { DatabaseModule } from './database/module.database';

@Module({
  providers: [],
  exports: [],
  imports: [
    DatabaseModule,
    InterfacesModule
  ]
})
export class InfraestructureModule { }
