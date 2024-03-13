export class GroupApplicationError extends Error {
  __proto__ = Error

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, GroupApplicationError.prototype);
  }

}