import { UserService } from 'src/domain/services/UserService/UserService';

export class GetAllUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async getAllUser() {
    try {
      const response = await this.userService.getAllUser();

      return response.map((user) => ({ ...user }));
    } catch (error) {
      return error;
    }
  }
}
