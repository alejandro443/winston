import { ApplicationError } from './ApplicationError';

export class ProvinceApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Province Controller');
    Object.setPrototypeOf(this, ProvinceApplicationError.prototype);
  }
}
