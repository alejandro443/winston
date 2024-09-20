import { ApplicationError } from './ApplicationError';

export class QuotaPaymentApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'QuotaPayment Controller');
    Object.setPrototypeOf(this, QuotaPaymentApplicationError.prototype);
  }
}
