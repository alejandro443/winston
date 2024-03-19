import { UserService } from 'src/domain/services/UserService/UserService';

export class GetOneUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async getOneUser(code: string) {
    try {
      const response = await this.userService.getOneUser(code);
      return { ...response };
    } catch (error) {
      return error;
    }
  }
}
