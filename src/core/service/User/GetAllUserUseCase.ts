import { UserService } from 'src/domain/services/UserService/UserService';

export class GetAllUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async getAllUser() {
    try {
      const response: any = await this.userService?.getAllUser();

      return response.map((user: any) => ({ ...user }));
    } catch (error: any) {
      return error;
    }
  }
}
