import { NewAccessDto } from 'src/core/shared/dto/Access/access_dto';
import { AccessService } from '@src/domain/services/AccessService/AccessService';

export class CreateAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async createAccess(access: NewAccessDto) {
    try {
      const response =
        await this.accessService.createAccess(access);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error) {
      return error;
    }
  }
}
