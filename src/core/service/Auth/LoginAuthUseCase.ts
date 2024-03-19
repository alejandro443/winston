import { LoginDto } from '@src/core/shared/dto/authentication/authentication_dto';
import { ValidatorPassword } from '@src/core/shared/functions/validator_password.function';
import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';
import { AuthApplicationError } from '@src/core/shared/error/AuthApplicationError';
import { AccessRolService } from '@src/domain/services/AccesssService/AccessRolService';

export class LoginAuthUseCase {
  constructor(
    private userRolService?: UserRolService,
    private accessRolService?: AccessRolService
  ) {
    this.userRolService = new UserRolService();
    this.accessRolService = new AccessRolService();
  }

  async loginAuth(login: LoginDto) {
    try {
      const { user, password } = login
      const user_rol_data = await this.userRolService.getUserRolByUser(user);

      if (!user_rol_data || user_rol_data.length === 0) {
        throw new AuthApplicationError('Usuario o contraseña incorrectos.', 'BAD_REQUEST');
      }

      var user_data = user_rol_data[0]['user']['dataValues']
      if (!await ValidatorPassword(password, user_data.password)) {
        throw new AuthApplicationError('Usuario o contraseña incorrectos.', 'BAD_REQUEST');
      }

      var rol_data = user_rol_data[0]['rol']['dataValues']
      var access_data = await this.accessRolService.getAccessRolByRol(rol_data.id)
      console.log(access_data)
      return {
        id: user_data.id,
        code: user_data.code,
        user: user_data.user,
        
      }
    } catch (error) {
      throw new AuthApplicationError(error.message, error.statusError);
    }
  }
}