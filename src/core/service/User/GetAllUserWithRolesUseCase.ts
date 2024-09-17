import { UserRolService } from 'src/domain/services/UserRolService/UserRolService';

export class GetAllUserWithRolesUseCase {
  constructor(private userRolService?: UserRolService) {
    this.userRolService = new UserRolService();
  }

  async getAllUserWithRoles() {
    try {
      const response: any = await this.userRolService?.getUserWithRoles();
      return response.map((user: any) => ({rol: user.dataValues.rol, user: user.dataValues.user}));
    } catch (error: any) {
      return error;
    }
  }
}
