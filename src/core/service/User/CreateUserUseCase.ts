import { UserService } from 'src/domain/services/UserService/UserService';
import { NewUserDto, NewUserWithPersonDto } from 'src/core/shared/dto/User/user_dto';
import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';

export class CreateUserUseCase {
  constructor(
    private userService?: UserService,
    private userRolService?: UserRolService
  ) {
    this.userService = new UserService();
    this.userRolService = new UserRolService();
  }

  async createUser(user: NewUserDto) {
    try {
      const user_data: any = await this.userService?.createUser(user);
      
      if (user.assigned_roles.length > 0) {
        // The role is assigned to the user
        await Promise.all(
          user.assigned_roles.map((role_id: number) => 
            this.userRolService?.createUserRol({ user_id: user_data.id, rol_id: role_id })
          )
        );
      }

      return {
        id: user_data.id,
        user: user_data.user,
        code: user_data.code,
        consultant: user_data.consultant,
        status: user_data.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
