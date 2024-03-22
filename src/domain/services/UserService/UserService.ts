import {
  GenerateCodeUser,
  GenerateRandomCodeUser,
} from '@src/core/shared/functions/generate_code_user.function';
import { NewUserDto } from 'src/core/shared/dto/User/user_dto';
import { UserRepository } from 'src/domain/repositories/UserRepository/UserRepository';

export class UserService {
  constructor(private repository?: UserRepository) {
    this.repository = new UserRepository();
  }

  async getOneUser(code: string) {
    try {
      return this.repository.findOne(code);
    } catch (error) {
      return error;
    }
  }

  async getAllUser() {
    try {
      return this.repository.findAll();
    } catch (error) {
      return error;
    }
  }

  async createUser(user: NewUserDto) {
    try {
      user.code = user.code
        ? await GenerateCodeUser(user.code)
        : await GenerateRandomCodeUser();

      return this.repository.create(user);
    } catch (error) {
      return error;
    }
  }

  async updateUser(code: string, user: NewUserDto) {
    try {
      return this.repository.update(code, user);
    } catch (error) {
      return error;
    }
  }

  async deleteUser(code: string) {
    try {
      return this.repository.deleted(code);
    } catch (error) {
      return error;
    }
  }

  async getUser(user: string) {
    try {
      return this.repository.getUser(user);
    } catch (error) {
      return error;
    }
  }
}
