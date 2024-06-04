import { ApplicationError } from './ApplicationError';

export class ClientDeliveryPointApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'ClientDeliveryPoint Controller');
    Object.setPrototypeOf(this, ClientDeliveryPointApplicationError.prototype);
  }
}
