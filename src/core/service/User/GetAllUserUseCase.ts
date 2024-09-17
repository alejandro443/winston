import { Roles } from '@src/infraestructure/shared/enums/Roles';
import { UserService } from 'src/domain/services/UserService/UserService';

export class GetAllUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async getAllUser() {
    try {
      const response: any = await this.userService?.getAllUser();

      return response.map((user: any) => ({
        id: user.id,
        user: user.user,
        code: user.code,
        status: user.status,
        consultant: user.consultant,
        is_base: user.is_base,
      }));
    } catch (error: any) {
      return error;
    }
  }

  async getAllUserSellers() {
    try {
      const response: any = await this.userService?.getAllUserSellers(Roles.VENDEDOR);

      const data: any = await response.map((user: any) => {
        const user_data: any = user.toJSON();
        return {
          id: user_data.id,
          user: user_data.user.user
        }
      });
      
      return data;
    } catch (error: any) {
      return error;
    }
  }
}
