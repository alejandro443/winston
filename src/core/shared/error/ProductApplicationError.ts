import { ApplicationError } from './ApplicationError';

export class ProductApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Product Controller');
    Object.setPrototypeOf(this, ProductApplicationError.prototype);
  }
}
