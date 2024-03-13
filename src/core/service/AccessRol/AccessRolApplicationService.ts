import { AccessRolApplication } from '../../application/AccessRol/AccessRolApplication';

export class AccessRolApplicationService implements AccessRolApplication {
  constructor() {}

  async createAccessRol(rol) {
    console.log(rol);
    return 0;
  }
}
