import { ApplicationError } from './ApplicationError';

export class SaleDocumentApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Sale Documents Controller');
    Object.setPrototypeOf(this, SaleDocumentApplicationError.prototype);
  }
}
