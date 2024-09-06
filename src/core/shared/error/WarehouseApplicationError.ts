import { ApplicationError } from './ApplicationError';

export class WarehouseApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Warehouse Controller');
    Object.setPrototypeOf(this, WarehouseApplicationError.prototype);
  }
}
