import { RolService } from '@src/domain/services/RolService/RolService';

export class GetAllRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async getAllRol() {
    try {
      const response: any = await this.rolService?.getAllRol();

      return response.map((rol: any) => ({ ...rol }));
    } catch (error: any) {
      return error;
    }
  }
}
