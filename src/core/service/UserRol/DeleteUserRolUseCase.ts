import { UserRolService } from "@src/domain/services/UserRolService/UserRolService";

export class DeleteUserRolUseCase {
  constructor(private userService?: UserRolService) {
    this.userService = new UserRolService();
  }

  async deleteUserRol(id: number) {
    try {
      const response =
        await this.userService.deleteUserRol(id);
      return { id: response['id'] };
    } catch (error) {
      return error;
    }
  }
}
