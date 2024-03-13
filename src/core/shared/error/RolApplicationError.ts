export class RolApplicationError extends Error {
  __proto__ = Error;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, RolApplicationError.prototype);
  }
}
