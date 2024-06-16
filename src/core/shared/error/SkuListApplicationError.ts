import { ApplicationError } from './ApplicationError';

export class SkuListApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'SkuList Controller');
    Object.setPrototypeOf(this, SkuListApplicationError.prototype);
  }
}
