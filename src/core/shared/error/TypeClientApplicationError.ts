export class TypeClientApplicationError extends Error {
  __proto__ = Error;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, TypeClientApplicationError.prototype);
  }
}
