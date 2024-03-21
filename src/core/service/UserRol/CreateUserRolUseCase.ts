import { NewUserRolDto } from '@dto/UserRol/user_rol_dto';
import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';

export class CreateUserRolUseCase {
  constructor(private userRolService?: UserRolService) {
    this.userRolService = new UserRolService();
  }

  async createUserRol(userRol: NewUserRolDto) {
    try {
      const response =
        await this.userRolService.createUserRol(userRol);
      return { ...response };
    } catch (error) {
      return error;
    }
  }
}
