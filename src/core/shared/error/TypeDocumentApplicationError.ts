import { ApplicationError } from "./ApplicationError";

export class TypeDocumentApplicationError extends ApplicationError {
  constructor(message: string, statusError: string = 'INTERNAL_SERVER_ERROR') {
    super(message, statusError, 'TypeDocument Controller');
    Object.setPrototypeOf(this, TypeDocumentApplicationError.prototype);
  }
}
