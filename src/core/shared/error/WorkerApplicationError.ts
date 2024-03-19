import { ApplicationError } from "./ApplicationError";

export class WorkerApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Worker Controller');
    Object.setPrototypeOf(this, WorkerApplicationError.prototype);
  }
}
