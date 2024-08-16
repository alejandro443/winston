import { UpdateAccessDto } from 'src/core/shared/dto/Access/access_dto';
import { Access } from 'src/domain/entities/Access.entity';

export class AccessRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Access.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      const access_data: any = await Access.findAll({ where: { deleted_at: null } });
      return access_data
    } catch (error: any) {
      return error;
    }
  }

  async create(access: any) {
    try {
      var create_data: any = await Access.create(access);
      return create_data;
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, access: UpdateAccessDto) {
    try {
      var update_data: any = await Access.update(access, { where: { id: id } });
      return update_data;
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return await Access.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
