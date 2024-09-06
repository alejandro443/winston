import { ApplicationError } from './ApplicationError';

export class PointSaleApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'PointSale Controller');
    Object.setPrototypeOf(this, PointSaleApplicationError.prototype);
  }
}
