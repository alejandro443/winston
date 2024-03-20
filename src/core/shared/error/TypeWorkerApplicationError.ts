import { ApplicationError } from './ApplicationError';

export class TypeWorkerApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'TypeWorker Controller');
    Object.setPrototypeOf(this, TypeWorkerApplicationError.prototype);
  }
}
