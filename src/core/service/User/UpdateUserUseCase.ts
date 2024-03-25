import { UpdateUserDto } from 'src/core/shared/dto/User/user_dto';
import { UserService } from 'src/domain/services/UserService/UserService';

export class UpdateUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async updateUser(code: any, user: UpdateUserDto) {
    try {
      const response: any = await this.userService?.updateUser(code, user);
      return { ...response };
    } catch (error: any) {
      return error;
    }
  }
}
