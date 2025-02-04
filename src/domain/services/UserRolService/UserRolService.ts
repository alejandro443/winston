import { UserRolApplicationError } from '@src/core/shared/error/UserRolApplicationError';
import { UserRolRepository } from '@src/domain/repositories/UserRolRepository/UserRolRepository';
import { UserRolDto } from 'src/core/shared/dto/UserRol/user_rol_dto';

export class UserRolService {
  constructor(private repository?: UserRolRepository) {
    this.repository = new UserRolRepository();
  }

  async getOneUserRol(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async getAllUserRol() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async createUserRol(user_rol: UserRolDto) {
    try {
      return this.repository?.create(user_rol);
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async updateUserRol(id: number, user: UserRolDto) {
    try {
      return this.repository?.update(id, user);
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async deleteUserRol(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async getUserRolByUser(user: string) {
    try {
      return await this.repository?.getUserRolByUser(user);
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }
  
  async getUserWithRoles() {
    try {
      var getUserWithRoles: any = await this.repository?.getUserWithRoles();
      return getUserWithRoles;
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }
}
