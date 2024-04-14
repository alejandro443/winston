import { UserService } from 'src/domain/services/UserService/UserService';

export class GetAllUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async getAllUser() {
    try {
      const response: any = await this.userService?.getAllUser();

      return response.map((user: any) => ({
        id: user.id,
        user: user.user,
        code: user.code,
        status: user.statug,
        consultant: user.consultant,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
