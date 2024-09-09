import { ApplicationError } from './ApplicationError';

export class ListPriceProductApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'ListPriceProduct Controller');
    Object.setPrototypeOf(this, ListPriceProductApplicationError.prototype);
  }
}
