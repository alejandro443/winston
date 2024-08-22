import { ApplicationError } from './ApplicationError';

export class BusinessSubcategoryApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'BusinessSubcategory Controller');
    Object.setPrototypeOf(this, BusinessSubcategoryApplicationError.prototype);
  }
}
