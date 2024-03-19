import { ApplicationError } from "./ApplicationError";

export class UserApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'User Controller');
    Object.setPrototypeOf(this, UserApplicationError.prototype);
  }
}
