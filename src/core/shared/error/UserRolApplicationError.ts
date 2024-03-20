import { ApplicationError } from './ApplicationError';

export class UserRolApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'UserRol Controller');
    Object.setPrototypeOf(this, UserRolApplicationError.prototype);
  }
}
