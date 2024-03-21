import { RolService } from "@src/domain/services/RolService/RolService";

export class GetAllRolUseCase {
  constructor(private rolService?: RolService) {
    this.rolService = new RolService();
  }

  async getAllRol() {
    try {
      const response = await this.rolService.getAllRol();

      return response.map((rol) => ({...rol}));
    } catch (error) {
      return error;
    }
  }
}
