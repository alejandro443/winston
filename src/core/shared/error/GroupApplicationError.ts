import { ApplicationError } from "./ApplicationError";

export class GroupApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Group Controller');
    Object.setPrototypeOf(this, GroupApplicationError.prototype);
  }
}
