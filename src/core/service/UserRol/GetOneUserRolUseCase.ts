import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';

export class GetOneUserRolUseCase {
  constructor(private userService?: UserRolService) {
    this.userService = new UserRolService();
  }

  async getOneUserRol(id: number) {
    try {
      const response: any = await this.userService?.getOneUserRol(id);
      return { ...response.dataValues };
    } catch (error: any) {
      return error;
    }
  }
}
