import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';

export class GetAllUserRolUseCase {
  constructor(private userService?: UserRolService) {
    this.userService = new UserRolService();
  }

  async getAllUserRol() {
    try {
      const response = await this.userService.getAllUserRol();

      return response.map((user) => ({ ...user }));
    } catch (error) {
      return error;
    }
  }
}
