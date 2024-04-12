import { ApplicationError } from './ApplicationError';

export class DistrictApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'District Controller');
    Object.setPrototypeOf(this, DistrictApplicationError.prototype);
  }
}
