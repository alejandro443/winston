import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { SharedModule } from './infraestructure/shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { InterfacesModule } from './interfaces/interfaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    ServeStaticModule.forRoot(
      {
        rootPath: join('dist/public/images'),
        serveRoot: '/images/'
      }
    ),
    // InfraestructureModule,
    SharedModule,
    CoreModule.register({
      modules: [InfraestructureModule, InterfacesModule],
    }),
  ],
})
export class AppModule {}
