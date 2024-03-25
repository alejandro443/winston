import { NewAccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';
import { AccessRolService } from '@src/domain/services/AccessRolService/AccessRolService';

export class CreateAccessRolUseCase {
  constructor(private accessService?: AccessRolService) {
    this.accessService = new AccessRolService();
  }

  async createAccessRol(access: NewAccessRolDto) {
    try {
      const response: any = await this.accessService?.createAccessRol(access);
      return { ...response };
    } catch (error: any) {
      return error;
    }
  }
}
