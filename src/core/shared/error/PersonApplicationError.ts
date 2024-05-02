import { ApplicationError } from './ApplicationError';

export class PersonApplicationError extends ApplicationError {
  constructor(message: string = 'Error en la aplicación.', statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'Person Controller');
    Object.setPrototypeOf(this, PersonApplicationError.prototype);
  }
}
