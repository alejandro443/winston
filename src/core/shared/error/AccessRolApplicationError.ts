import { ApplicationError } from './ApplicationError';

export class AccessRolApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'AccessRol Controller');
    Object.setPrototypeOf(this, AccessRolApplicationError.prototype);
  }
}
