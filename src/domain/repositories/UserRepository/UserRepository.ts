import { NewUserDto, UpdateUserDto } from 'src/core/shared/dto/User/user_dto';
import { User } from 'src/domain/entities/User.entity';

export class UserRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return User.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return User.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(user: NewUserDto) {
    try {
      return User.create(user);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, user: UpdateUserDto) {
    try {
      return User.update(user, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return User.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async getUser(user: any) {
    try {
      return User.findOne({ where: { user: user } });
    } catch (error: any) {
      return error;
    }
  }
}
