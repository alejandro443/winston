import { ApplicationError } from './ApplicationError';

export class WorkAreaApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'WorkArea Controller');
    Object.setPrototypeOf(this, WorkAreaApplicationError.prototype);
  }
}
