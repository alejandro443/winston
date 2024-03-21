import { RolApplication } from '../../application/Rol/RolApplication';

export class RolApplicationService implements RolApplication {
  constructor() {}

  async createRol(rol) {
    try {
      console.log(rol);
      return true;
    } catch (error) {
      return error;
    }
  }
}
