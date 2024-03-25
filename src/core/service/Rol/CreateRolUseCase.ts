import { NewRolDto } from 'src/core/shared/dto/Rol/rol_dto';
import { RolService } from '@src/domain/services/RolService/RolService';

export class CreateRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async createRol(rol: NewRolDto) {
    try {
      const response: any = await this.rolService?.createRol(rol);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
