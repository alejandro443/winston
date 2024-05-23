import { ApplicationError } from './ApplicationError';

export class DepartmentApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Department Controller');
    Object.setPrototypeOf(this, DepartmentApplicationError.prototype);
  }
}
