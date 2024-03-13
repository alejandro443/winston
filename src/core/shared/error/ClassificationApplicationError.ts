export class ClassificationApplicationError extends Error {
  __proto__ = Error;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ClassificationApplicationError.prototype);
  }
}
