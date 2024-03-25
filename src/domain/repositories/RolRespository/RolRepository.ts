import { NewRolDto, UpdateRolDto } from 'src/core/shared/dto/Rol/rol_dto';
import { Rol } from 'src/domain/entities/Rol.entity';

export class RolRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Rol.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Rol.findAll({ where: { deleted_at: '' } });
    } catch (error: any) {
      return error;
    }
  }

  async create(rol: any) {
    try {
      return Rol.create(rol);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, rol: UpdateRolDto) {
    try {
      return Rol.update(rol, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Rol.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
