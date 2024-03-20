import { UserRolApplicationError } from '@src/core/shared/error/UserRolApplicationError';
import { UserRolRepository } from '@src/domain/repositories/UserRolRepository/UserRolRepository';
import { UserRolDto } from '@dto/UserRol/user_rol_dto';

export class UserRolService {
  constructor(private repository?: UserRolRepository) {
    this.repository = new UserRolRepository();
  }

  async getOneUser(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async getAllUser() {
    try {
      return this.repository.findAll();
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async createUser(user_rol: UserRolDto) {
    try {
      return this.repository.create(user_rol);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async updateUser(id: number, user: UserRolDto) {
    try {
      return this.repository.update(id, user);
    } catch (error) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async deleteUser(id: number) {
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
