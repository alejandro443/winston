import { Injectable, LoggerService } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER, WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Inject } from '@nestjs/common';
import { OneOrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

@Injectable()
export class LoggerCustomService implements LoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logg: Logger,
  ) {}

  log(message: string, context?: string, organization?: OneOrganizationDto, $?: any, p0?: { id: number; }, name?: string) {
    this.logg.info({
      message,
      context: context || LoggerCustomService.name,
      timestamp: new Date().toISOString(),
    });
  }

  error(message: string, error?: Error | string, context?: string) {
    const errorInfo: any = {
      message,
      context: context || LoggerCustomService.name,
      timestamp: new Date().toISOString(),
    };

    if (error instanceof Error) {
      errorInfo.stack = error.stack;
      errorInfo.name = error.name;
      errorInfo.message = error.message;
    } else if (typeof error === 'string') {
      errorInfo.stack = error;
    }

    this.logg.error(errorInfo);
  }

  // Alias para mantener compatibilidad con el método usado en el filtro
  logError(message: string, trace?: string, context?: string) {
    this.error(message, trace, context);
  }

  warn(message: string, context?: string) {
    this.logg.warn({
      message,
      context: context || LoggerCustomService.name,
      timestamp: new Date().toISOString(),
    });
  }

  debug(message: string, context?: string) {
    this.logg.debug({
      message,
      context: context || LoggerCustomService.name,
      timestamp: new Date().toISOString(),
    });
  }

  verbose(message: string, context?: string) {
    this.logg.verbose({
      message,
      context: context || LoggerCustomService.name,
      timestamp: new Date().toISOString(),
    });
  }
}
