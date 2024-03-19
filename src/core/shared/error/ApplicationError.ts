export class ApplicationError extends Error {
  statusError: string;
  controller: string;

  constructor(message: string = 'Error de servidor.', statusError: string = 'INTERNAL_SERVER_ERROR', controller: string = 'Application Controller') {
    super(message);
    this.controller = controller;
    this.statusError = statusError;
    Object.setPrototypeOf(this, ApplicationError.prototype);
  }
}
