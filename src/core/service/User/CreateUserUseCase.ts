import { UserService } from 'src/domain/services/UserService/UserService';
import { NewUserDto } from 'src/core/shared/dto/User/user_dto';

export class CreateUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async createUser(user: NewUserDto) {
    try {
      const response =
        await this.userService.createUser(user);
      return {
        id: response.id,
        user: response.user,
        code: response.code,
        consultant: response.consultant,
        status: response.status
      };
    } catch (error) {
      return error;
    }
  }
}
