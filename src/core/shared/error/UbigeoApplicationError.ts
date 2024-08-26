import { ApplicationError } from './ApplicationError';

export class UbigeoApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Ubigeo Controller');
    Object.setPrototypeOf(this, UbigeoApplicationError.prototype);
  }
}
