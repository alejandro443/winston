import { AccessRolApplicationError } from '@src/core/shared/error/AccessRolApplicationError';
import { AccessRolRepository } from '@src/domain/repositories/AccessRolRepository/AccessRolRepository';
import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export class AccessRolService {
  constructor(private repository?: AccessRolRepository) {
    this.repository = new AccessRolRepository();
  }

  async getOneAccessRol(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async getAllAccessRol() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async createAccessRol(access: AccessRolDto) {
    try {
      return this.repository?.create(access);
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async updateAccessRol(id: number, access: AccessRolDto) {
    try {
      return this.repository?.update(id, access);
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async deleteAccessRol(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async getAccessRolByRol(rol_id: number) {
    try {
      return await this.repository?.getAccessRolByRol(rol_id);
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }
}
