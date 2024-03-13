import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request } from 'express';
import { ClientApplicationError } from 'src/core/shared/error/ClientApplicationError';

@Catch(ClientApplicationError)
export class ClientCreatorFilter implements ExceptionFilter {
  catch(exception: ClientApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    Logger.error(`ClientController (${request.method}) at {${request.path}} error: ${exception.message}`)

    response
      .status(HttpStatus.BAD_REQUEST)
      .json({
        status: HttpStatus.BAD_REQUEST,
        message: exception.message
      });
  }
}
