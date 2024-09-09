import { ApplicationError } from './ApplicationError';

export class ListPriceApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'ListPrice Controller');
    Object.setPrototypeOf(this, ListPriceApplicationError.prototype);
  }
}
