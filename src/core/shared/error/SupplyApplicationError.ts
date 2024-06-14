import { ApplicationError } from './ApplicationError';

export class SupplyApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Supply Controller');
    Object.setPrototypeOf(this, SupplyApplicationError.prototype);
  }
}
