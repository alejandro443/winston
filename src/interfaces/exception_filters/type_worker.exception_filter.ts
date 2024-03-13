import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request } from 'express';
import { TypeWorkerApplicationError } from 'src/core/shared/error/TypeWorkerApplicationError';

@Catch(TypeWorkerApplicationError)
export class TypeWorkerCreatorFilter implements ExceptionFilter {
  catch(exception: TypeWorkerApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    Logger.error(`TypeWorkerController (${request.method}) at {${request.path}} error: ${exception.message}`)

    response
      .status(HttpStatus.BAD_REQUEST)
      .json({
        status: HttpStatus.BAD_REQUEST,
        message: exception.message
      });
  }
}
