import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { SharedModule } from './infraestructure/shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, 'public/images'),
        serveRoot: '/images/'
      }
    ),
    InfraestructureModule,
    SharedModule,
    CoreModule.register({
      modules: [InfraestructureModule],
    }),
  ],
})
export class AppModule {}
