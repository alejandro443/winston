import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infraestructure/database/module.database';
import { InterfacesModule } from './interfaces/interfaces.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CoreModule.register({ 
      modules: [
        InterfacesModule
      ] 
    })
  ],
})
export class AppModule { }
