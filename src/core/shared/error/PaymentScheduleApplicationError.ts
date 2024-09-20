import { ApplicationError } from './ApplicationError';

export class PaymentScheduleApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'PaymentSchedule Controller');
    Object.setPrototypeOf(this, PaymentScheduleApplicationError.prototype);
  }
}
