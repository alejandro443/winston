import { UserRolApplicationError } from '@src/core/shared/error/UserRolApplicationError';
import { Rol } from '@src/domain/entities/Rol.entity';
import { User } from '@src/domain/entities/User.entity';

import {
  NewUserRolDto,
  UpdateUserRolDto,
} from 'src/core/shared/dto/UserRol/user_rol_dto';
import { UserRol } from 'src/domain/entities/UserRol.entity';

export class UserRolRepository {
  constructor() {}

  async findUserRoles(id: number) {
    try {
      return UserRol.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return UserRol.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async findAll() {
    try {
      return UserRol.findAll({ where: { deleted_at: '' } });
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async create(user: any) {
    try {
      return UserRol.create(user);
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async update(id: number, user: UpdateUserRolDto) {
    try {
      return UserRol.update(user, { where: { id: id } });
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async deleted(id: number) {
    try {
      return UserRol.destroy({ where: { id: id } });
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }

  async getUserRolByUser(user: string) {
    try {
      return await UserRol.findAll({
        include: [
          {
            model: Rol,
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
    } catch (error: any) {
      throw new UserRolApplicationError(error.message);
    }
  }
}
