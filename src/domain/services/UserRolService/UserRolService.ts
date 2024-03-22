import { UserRolApplicationError } from '@src/core/shared/error/UserRolApplicationError';
import { UserRolRepository } from '@src/domain/repositories/UserRolRepository/UserRolRepository';
import { UserRolDto } from '@dto/UserRol/user_rol_dto';

export class UserRolService {
  constructor(private repository?: UserRolRepository) {
    this.repository = new UserRolRepository();
  }

  async getOneUserRol(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async getAllUserRol() {
    try {
      return this.repository.findAll();
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async createUserRol(user_rol: UserRolDto) {
    try {
      return this.repository.create(user_rol);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async updateUserRol(id: number, user: UserRolDto) {
    try {
      return this.repository.update(id, user);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async deleteUserRol(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async getUserRolByUser(user: string) {
    try {
      return await this.repository.getUserRolByUser(user);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }
}
