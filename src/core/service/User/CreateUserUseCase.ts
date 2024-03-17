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
      return {...response};
    } catch (error) {
      return error;
    }
  }
}
