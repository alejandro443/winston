import { UserAccessApplicationError } from '@src/core/shared/error/UserAccessApplicationError';
import { Rol } from '@src/domain/entities/Rol.entity';
import { User } from '@src/domain/entities/User.entity';

import {
  NewUserAccessDto,
  UpdateUserAccessDto,
} from 'src/core/shared/dto/UserAccess/user_access_dto';
import { UserAccess } from 'src/domain/entities/UserAccess.entity';
import { Access } from '@src/domain/entities/Access.entity';

export class UserAccessRepository {
  constructor() {}

  async findUserAccesses(id: number) {
    try {
      return UserAccess.findOne({ where: { id: id } });
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return UserAccess.findOne({ where: { id: id } });
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async findAll() {
    try {
      return UserAccess.findAll({ where: { deleted_at: null } });
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async create(user: NewUserAccessDto) {
    try {
      return UserAccess.create(user);
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async update(id: number, user: UpdateUserAccessDto) {
    try {
      return UserAccess.update(user, { where: { id: id } });
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async deleted(id: number) {
    try {
      return UserAccess.destroy({ where: { id: id } });
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }

  async getUserAccessByUser(user: string) {
    try {
      return await UserAccess.findAll({
        include: [
          {
            model: Access,
            attributes: ['id', 'name'],
          },
          {
            model: User,
            where: {
              user: user,
            },
          },
        ],
      });
    } catch (error) {
      throw new UserAccessApplicationError(error.message);
    }
  }
}
