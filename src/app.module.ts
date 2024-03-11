import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { SharedModule } from './infraestructure/shared/shared.module';

@Module({
  imports: [
    InfraestructureModule,
    SharedModule,
    CoreModule.register({ 
      modules: [
        InfraestructureModule
      ] 
    })
  ],
})
export class AppModule { }
