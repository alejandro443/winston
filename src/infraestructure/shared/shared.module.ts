import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ServerConfiguration from './configurations/server.configuration';
import DatabaseConfiguration from './configurations/database.configuration';
import { Log } from './log/Log';
import { Logger } from './log/Logger';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [DatabaseConfiguration, ServerConfiguration],
    }),
    Log,
    Logger,
  ],
})
export class SharedModule {}
