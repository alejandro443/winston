import { ApplicationError } from './ApplicationError';

export class DeliveryPointApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'DeliveryPoint Controller');
    Object.setPrototypeOf(this, DeliveryPointApplicationError.prototype);
  }
}
