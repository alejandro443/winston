import { RolService } from '@src/domain/services/RolService/RolService';

export class GetOneRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async getOneRol(id: number) {
    try {
      const response: any = await this.rolService?.getOneRol(id);
      return { ...response.dataValues };
    } catch (error: any) {
      return error;
    }
  }
}
