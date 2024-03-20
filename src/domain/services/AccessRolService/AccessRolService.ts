import { AccessRolApplicationError } from '@src/core/shared/error/AccessRolApplicationError';
import { AccessRolRepository } from '@src/domain/repositories/AccessRolRepository/AccessRolRepository';
import { AccessRolDto } from '@dto/AccessRol/access_rol_dto';

export class AccessRolService {
  constructor(private repository?: AccessRolRepository) {
    this.repository = new AccessRolRepository();
  }

  async getOneUser(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async getAllUser() {
    try {
      return this.repository.findAll();
    } catch (error) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async createUser(access: AccessRolDto) {
    try {
      return this.repository.create(access);
    } catch (error) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async updateUser(id: number, access: AccessRolDto) {
    try {
      return this.repository.update(id, access);
    } catch (error) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async deleteUser(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async getAccessRolByRol(rol_id: number) {
    try {
      return await this.repository.getAccessRolByRol(rol_id);
    } catch (error) {
      throw new AccessRolApplicationError(error.message);
    }
  }
}
