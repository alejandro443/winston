export class TypeWorkerApplicationError extends Error {
  __proto__ = Error

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, TypeWorkerApplicationError.prototype);
  }

}