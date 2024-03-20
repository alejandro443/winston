import { UserService } from 'src/domain/services/UserService/UserService';

export class DeleteUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async deleteUser(code: string) {
    try {
      const response = await this.userService.deleteUser(code);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
