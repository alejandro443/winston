import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { OrganizationApplicationError } from 'src/core/shared/error/OrganizationApplicationError';

@Catch(OrganizationApplicationError)
export class OrganizationCreatorFilter implements ExceptionFilter {
  catch(exception: OrganizationApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    Logger.error(
      `OrganizationController (${request.method}) at {${request.path}} error: ${exception.message}`,
    );

    response.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      message: exception.message,
    });
  }
}