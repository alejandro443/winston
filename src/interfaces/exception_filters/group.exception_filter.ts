import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request } from 'express';
import { GroupApplicationError } from 'src/core/shared/error/GroupApplicationError';

@Catch(GroupApplicationError)
export class GroupCreatorFilter implements ExceptionFilter {
  catch(exception: GroupApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    Logger.error(`GroupController (${request.method}) at {${request.path}} error: ${exception.message}`)

    response
      .status(HttpStatus.BAD_REQUEST)
      .json({
        status: HttpStatus.BAD_REQUEST,
        message: exception.message
      });
  }
}
