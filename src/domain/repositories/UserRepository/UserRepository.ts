import { NewUserDto, UpdateUserDto } from '@dto/User/user_dto';
import { User } from 'src/domain/entities/User.entity';

export class UserRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return User.findOne({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return User.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(user: NewUserDto) {
    try {
      return User.create(user);
    } catch (error) {
      return error;
    }
  }

  async update(code: string, user: UpdateUserDto) {
    try {
      return User.update(user, { where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return User.destroy({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async getUser(user) {
    try {
      return User.findOne({ where: { user: user } });
    } catch (error) {
      return error;
    }
  }
}
