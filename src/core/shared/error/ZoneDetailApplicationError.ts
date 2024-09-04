import { ApplicationError } from './ApplicationError';

export class ZoneDetailApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'ZoneDetail Controller');
    Object.setPrototypeOf(this, ZoneDetailApplicationError.prototype);
  }
}
