import { ApplicationError } from './ApplicationError';

export class SettingApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Setting Controller');
    Object.setPrototypeOf(this, SettingApplicationError.prototype);
  }
}
