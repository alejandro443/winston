import { UserService } from 'src/domain/services/UserService/UserService';

export class GetOneUserUseCase {
  constructor(private userService?: UserService) {
    this.userService = new UserService();
  }

  async getOneUser(code: string) {
    try {
      const response: any = await this.userService?.getOneUser(code);
      return {
        id: response.id,
        user: response.user,
        code: response.code,
        status: response.status,
        consultant: response.consultant,
        is_base: response.is_base,
      };
    } catch (error: any) {
      return error;
    }
  }
}
