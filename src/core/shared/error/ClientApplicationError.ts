import { ApplicationError } from './ApplicationError';

export class ClientApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Client Controller');
    Object.setPrototypeOf(this, ClientApplicationError.prototype);
  }
}
