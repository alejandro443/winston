import { AccessRolService } from '@src/domain/services/AccessRolService/AccessRolService';

export class DeleteAccessRolUseCase {
  constructor(private accessService?: AccessRolService) {
    this.accessService = new AccessRolService();
  }

  async deleteAccessRol(id: number) {
    try {
      const response = await this.accessService.deleteAccessRol(id);
      return { id: response['id'] };
    } catch (error) {
      return error;
    }
  }
}