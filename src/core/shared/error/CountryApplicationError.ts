import { ApplicationError } from './ApplicationError';

export class CountryApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Country Controller');
    Object.setPrototypeOf(this, CountryApplicationError.prototype);
  }
}
