import { UpdateUserDto } from '@dto/User/user_dto';
import { UserService } from 'src/domain/services/UserService/UserService';

export class UpdateUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async updateUser(code: string, user: UpdateUserDto) {
    try {
      const response = await this.userService.updateUser(code, user);
      return { ...response };
    } catch (error) {
      return error;
    }
  }
}
