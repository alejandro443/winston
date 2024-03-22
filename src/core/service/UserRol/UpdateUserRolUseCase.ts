import { UpdateUserRolDto } from 'src/core/shared/dto/UserRol/user_rol_dto';
import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';

export class UpdateUserRolUseCase {
  constructor(private userService?: UserRolService) {
    this.userService = new UserRolService();
  }

  async updateUserRol(
    id: number,
    user: UpdateUserRolDto,
  ) {
    try {
      const response = await this.userService.updateUserRol(
        id,
        user,
      );
      return { ...response };
    } catch (error) {
      return error;
    }
  }
}
