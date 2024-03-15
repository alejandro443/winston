export class OrganizationApplicationError extends Error {
  __proto__ = Error;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, OrganizationApplicationError.prototype);
  }
}
