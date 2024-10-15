import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { winstonLoggerConfig } from './logger.config';
import { LoggerCustomService } from './logger-custom.service'; // Importa LoggerCustomService

@Module({
  imports: [
    WinstonModule.forRoot(winstonLoggerConfig),
  ],
  providers: [LoggerCustomService], // Agrega LoggerCustomService a los proveedores
  exports: [WinstonModule, LoggerCustomService], // Exporta LoggerCustomService
})
export class LoggerModule {}
