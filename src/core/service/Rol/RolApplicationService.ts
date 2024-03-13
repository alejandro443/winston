import { RolApplication } from '../../application/Rol/RolApplication';

export class RolApplicationService implements RolApplication {
  constructor() {}

  async createRol(rol) {
    console.log(rol);
    return 0;
  }
}
