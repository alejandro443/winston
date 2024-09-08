import { ApplicationError } from './ApplicationError';

export class PointSaleUserApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'PointSaleUser Controller');
    Object.setPrototypeOf(this, PointSaleUserApplicationError.prototype);
  }
}
