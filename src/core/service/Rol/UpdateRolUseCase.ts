import { UpdateRolDto } from 'src/core/shared/dto/Rol/rol_dto';
import { RolService } from '@src/domain/services/RolService/RolService';

export class UpdateRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async updateRol(id: number, rol: UpdateRolDto) {
    try {
      const response = await this.rolService.updateRol(id, rol);
      return { ...response.dataValues };
    } catch (error) {
      return error;
    }
  }
}
