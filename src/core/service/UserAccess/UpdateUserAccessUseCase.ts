import { UpdateAccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';
import { AccessRolService } from '@src/domain/services/AccessRolService/AccessRolService';

export class UpdateAccessRolUseCase {
  constructor(private accessService?: AccessRolService) {
    this.accessService = new AccessRolService();
  }

  async updateAccessRol(id: number, access: UpdateAccessRolDto) {
    try {
      const response: any = await this.accessService?.updateAccessRol(id, access);
      return { ...response };
    } catch (error: any) {
      return error;
    }
  }
}
