import { RolApplicationError } from '@src/core/shared/error/RolApplicationError';
import { RolDto } from 'src/core/shared/dto/Rol/rol_dto';
import { RolRepository } from '@src/domain/repositories/RolRespository/RolRepository';

export class RolService {
  constructor(private repository?: RolRepository) {
    this.repository = new RolRepository();
  }

  async getOneRol(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      throw new RolApplicationError(error.message);
    }
  }

  async getAllRol() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      throw new RolApplicationError(error.message);
    }
  }

  async createRol(rol: RolDto) {
    try {
      return this.repository?.create(rol);
    } catch (error: any) {
      throw new RolApplicationError(error.message);
    }
  }

  async updateRol(id: number, rol: RolDto) {
    try {
      return this.repository?.update(id, rol);
    } catch (error: any) {
      throw new RolApplicationError(error.message);
    }
  }

  async deleteRol(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new RolApplicationError(error.message);
    }
  }
}
