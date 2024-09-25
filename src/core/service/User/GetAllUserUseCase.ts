import { Roles } from '../../../infraestructure/shared/enums/Roles';
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
          id: user_data.user.id,
          user: user_data.user.user
        }
      });

      return data;
    } catch (error: any) {
      return error;
    }
  }

  async getAllUserWorkers() {
    try {
      const response: any = await this.userService?.getAllUserWorkers();

      const response_data = response.map((data: {
        id: number;
        status: string;
        created_at: string;
        updated_at: string;
        user: { user: string; userRoles: { rol: { name: string } }[] };
        person: { name: string; main_email: string; last_name: string };
      }) => {
        const roles = data.user.userRoles.length === 1
          ? { rol_name: data.user.userRoles[0].rol.name }
          : { roles: data.user.userRoles.map(rol_data => ({ rol_name: rol_data.rol.name })) };
      
        return {
          id: data.id,
          status: data.status,
          created_at: data.created_at,
          updated_at: data.updated_at,
          user: data.user.user,
          name: data.person.name,
          main_email: data.person.main_email,
          last_name: data.person.last_name,
          ...roles,
        };
      });
      return response_data;
    } catch (error: any) {
      return error;
    }
  }
}
