import { AccessRolApplicationError } from '@src/core/shared/error/AccessRolApplicationError';
import { Access } from '@src/domain/entities/Access.entity';
import {
  NewAccessRolDto,
  UpdateAccessRolDto,
} from 'src/core/shared/dto/AccessRol/access_rol_dto';
import { AccessRol } from 'src/domain/entities/AccessRol.entity';

export class AccessRolRepository {
  constructor() {}

  async findAccessRoles(id: number) {
    try {
      return AccessRol.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return AccessRol.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async findAll() {
    try {
      return AccessRol.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async create(access: NewAccessRolDto) {
    try {
      return AccessRol.create(access);
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async update(id: number, access: UpdateAccessRolDto) {
    try {
      return AccessRol.update(access, { where: { id: id } });
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async deleted(id: number) {
    try {
      return AccessRol.destroy({ where: { id: id } });
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }

  async getAccessRolByRol(rol_id: number) {
    console.log("getAccessRolByRol",rol_id)
    try {
      return await AccessRol.findAll({
        include: [
          {
            model: Access,
            attributes: ['name', 'url', 'priority'],
            required: true,
            include: [
              {
                model: Access,
                as: 'parentAccess',
                attributes: [
                  ['name', 'parent_name'],
                  ['priority', 'parent_priority'],
                  ['url', 'parent_url'],
                ],
                required: true,
                order: [[Access, 'priority', 'ASC']],
              },
            ],
            where: { status: true },
          },
        ],
        attributes: ['rol_id'],
        where: {
          rol_id: rol_id,
          status: true,
        },
      })
        .then((result) => {
          const accesses = result.map((accessRole: any) => {
            const data = accessRole['access']['dataValues'];
            const { name, url, priority } = data;
            const { parent_name, parent_url, parent_priority } =
              data['parentAccess']['dataValues'];

            return {
              parent_name,
              parent_url,
              parent_priority,
              name,
              url,
              priority,
            };
          });

          return accesses;
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error: any) {
      throw new AccessRolApplicationError(error.message);
    }
  }
}
