import { ApplicationError } from './ApplicationError';

export class ZoneApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Zone Controller');
    Object.setPrototypeOf(this, ZoneApplicationError.prototype);
  }
}
