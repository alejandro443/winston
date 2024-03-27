import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ApplicationError } from '@src/core/shared/error/ApplicationError';
import { Response, Request } from 'express';

@Catch(ApplicationError)
export class ApplicationCreatorFilter implements ExceptionFilter {
  catch(exception: ApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: any = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const exc: any = exception;

    Logger.error(
      `${exception.controller} (${request.method}) at {${request.path}} error: ${exception.message}`,
    );

    response.status(HttpStatus[exc.statusError]).json({
      status: HttpStatus[exc.statusError],
      message: exception.message,
    });
  }
}
