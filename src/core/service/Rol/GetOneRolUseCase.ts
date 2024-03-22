import { RolService } from '@src/domain/services/RolService/RolService';

export class GetOneRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async getOneRol(id: number) {
    try {
      const response = await this.rolService.getOneRol(id);
      return { ...response.dataValues };
    } catch (error) {
      return error;
    }
  }
}
