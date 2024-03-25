import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';

export class GetAllUserRolUseCase {
  constructor(private userService?: UserRolService) {
    this.userService = new UserRolService();
  }

  async getAllUserRol() {
    try {
      const response: any = await this.userService?.getAllUserRol();

      return response.map((user: any) => ({ ...user }));
    } catch (error: any) {
      return error;
    }
  }
}
