import { ApplicationError } from './ApplicationError';

export class AccessApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Access Controller');
    Object.setPrototypeOf(this, AccessApplicationError.prototype);
  }
}
