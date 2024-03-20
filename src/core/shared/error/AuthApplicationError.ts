import { ApplicationError } from './ApplicationError';

export class AuthApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Authentication Controller');
    Object.setPrototypeOf(this, AuthApplicationError.prototype);
  }
}
