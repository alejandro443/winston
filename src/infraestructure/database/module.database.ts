import { Module } from '@nestjs/common';
import { ConnectionProvider } from './connection.database';

@Module({
  providers: [...ConnectionProvider],
  exports: [...ConnectionProvider],
})
export class DatabaseModule {}
