import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request } from 'express';
import { RolApplicationError } from 'src/core/shared/error/RolApplicationError';

@Catch(RolApplicationError)
export class RolCreatorFilter implements ExceptionFilter {
  catch(exception: RolApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>()

    Logger.error(`RolController (${request.method}) at {${request.path}} error: ${exception.message}`)

    response
      .status(HttpStatus.BAD_REQUEST)
      .json({
        status: HttpStatus.BAD_REQUEST,
        message: exception.message
      });

  }
}
