import { ApplicationError } from './ApplicationError';

export class BusinessTurnApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'BusinessTurn Controller');
    Object.setPrototypeOf(this, BusinessTurnApplicationError.prototype);
  }
}
