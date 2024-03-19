import { ApplicationError } from "./ApplicationError";

export class RolApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Rol Controller');
    Object.setPrototypeOf(this, RolApplicationError.prototype);
  }
}
