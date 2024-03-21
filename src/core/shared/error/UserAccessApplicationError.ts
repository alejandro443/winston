import { ApplicationError } from './ApplicationError';

export class UserAccessApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'UserAccess Controller');
    Object.setPrototypeOf(this, UserAccessApplicationError.prototype);
  }
}
