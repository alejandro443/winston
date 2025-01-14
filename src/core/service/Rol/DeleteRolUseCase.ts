import { RolService } from '@src/domain/services/RolService/RolService';

export class DeleteRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async deleteRol(id: number) {
    try {
      const response: any = await this.rolService?.deleteRol(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
