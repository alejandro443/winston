import { ApplicationError } from './ApplicationError';

export class ClassificationApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Classification Controller');
    Object.setPrototypeOf(this, ClassificationApplicationError.prototype);
  }
}
