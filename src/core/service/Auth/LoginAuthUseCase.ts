import { ValidatorPassword } from '@src/core/shared/functions/validator_password.function';
import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';
import { AuthApplicationError } from '@src/core/shared/error/AuthApplicationError';
import { GenerateToken } from '@src/core/shared/functions/generate_token.function';
import { ClientService } from '@src/domain/services/ClientService/ClientService';
import { AccessRolService } from '@src/domain/services/AccessRolService/AccessRolService';
// import { LoginDto } from '@src/core/shared/dto/Authentication/authentication_dto';

export class LoginAuthUseCase {
  constructor(
    private userRolService?: UserRolService,
    private accessRolService?: AccessRolService,
    private clientService?: ClientService,
  ) {
    this.userRolService = new UserRolService();
    this.accessRolService = new AccessRolService();
    this.clientService = new ClientService();
  }

  async loginAuth(login: any) {
    try {
      const { user, password } = login;
      const user_rol_data = await this.userRolService?.getUserRolByUser(user);

      if (!user_rol_data || user_rol_data.length === 0) {
        throw new AuthApplicationError(
          '(Usuario) o contraseña incorrectos.',
          'BAD_REQUEST',
        );
      }

      const user_data = user_rol_data[0]['user']['dataValues'];
      if (!(await ValidatorPassword(password, user_data.password))) {
        throw new AuthApplicationError(
          'Usuario o (contraseña) incorrectos.',
          'BAD_REQUEST',
        );
      }

      const rol_data = user_rol_data[0]['rol']['dataValues'];

      const access_data = await this.accessRolService?.getAccessRolByRol(
        rol_data.id,
      );
      const client_data = await this.clientService?.getOneClientByUserId(
        user_data.id,
      );

      const token = await GenerateToken(user_data, client_data);
      return {
        id: user_data.id,
        code: user_data.code,
        user: user_data.user,
        accesses: access_data,
        token: token,
      };
    } catch (error: any) {
      throw new AuthApplicationError(error.message, error.statusError);
    }
  }
}
