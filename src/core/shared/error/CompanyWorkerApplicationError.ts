import { ApplicationError } from './ApplicationError';

export class CompanyWorkerApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'CompanyWorker Controller');
    Object.setPrototypeOf(this, CompanyWorkerApplicationError.prototype);
  }
}
