import { UserAccessApplicationError } from '@src/core/shared/error/UserAccessApplicationError';
import { UserAccessRepository } from '@src/domain/repositories/UserAccessRepository/UserAccessRepository';
import { UserAccessDto } from 'src/core/shared/dto/UserAccess/user_access_dto';

export class UserAccessService {
  constructor(private repository?: UserAccessRepository) {
    this.repository = new UserAccessRepository();
  }

  async getOneUserAccess(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async getAllUserAccess() {
    try {
      return this.repository.findAll();
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async createUserAccess(user_rol: UserAccessDto) {
    try {
      return this.repository.create(user_rol);
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async updateUserAccess(id: number, user: UserAccessDto) {
    try {
      return this.repository.update(id, user);
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async deleteUserAccess(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }
}
