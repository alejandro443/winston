import { UserService } from 'src/domain/services/UserService/UserService';
import { NewUserDto } from 'src/core/shared/dto/User/user_dto';
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
      
      await this.userRolService?.createUserRol({user_id: user_data.id, rol_id: user.rol_id});

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
