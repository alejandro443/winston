import { UpdateAccessDto } from 'src/core/shared/dto/Access/access_dto';
import { AccessService } from '@src/domain/services/AccessService/AccessService';

export class UpdateAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async updateAccess(id: number, access: UpdateAccessDto) {
    try {
      const response = await this.accessService.updateAccess(id, access);
      return { ...response.dataValues };
    } catch (error) {
      return error;
    }
  }
}
