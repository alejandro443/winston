import { ApplicationError } from './ApplicationError';

export class SaleApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Sale Controller');
    Object.setPrototypeOf(this, SaleApplicationError.prototype);
  }
}
