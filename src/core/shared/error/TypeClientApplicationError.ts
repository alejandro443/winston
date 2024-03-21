import { ApplicationError } from './ApplicationError';

export class TypeClientApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'TypeClient Controller');
    Object.setPrototypeOf(this, TypeClientApplicationError.prototype);
  }
}
