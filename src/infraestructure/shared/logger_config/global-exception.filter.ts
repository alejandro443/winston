import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerCustomService } from './logger-custom.service';

@Injectable()
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly loggerService: LoggerCustomService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: this.getErrorMessage(exception),
    };

    // Usamos LoggerCustomService para registrar el error
    this.loggerService.logError(
      `HTTP Status: ${status} - Error: ${JSON.stringify(errorResponse)}`,
      exception.stack,
      GlobalExceptionFilter.name
    );

    response.status(status).json(errorResponse);
  }

  private getErrorMessage(exception: any): string {
    if (exception instanceof HttpException) {
      const response = exception.getResponse();
      if (typeof response === 'string') {
        return response;
      } else if (typeof response === 'object' && response['message']) {
        return response['message'];
      }
    }
    return exception.message || 'Internal server error';
  }
}
