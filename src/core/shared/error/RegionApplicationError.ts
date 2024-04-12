import { ApplicationError } from './ApplicationError';

export class RegionApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Region Controller');
    Object.setPrototypeOf(this, RegionApplicationError.prototype);
  }
}
