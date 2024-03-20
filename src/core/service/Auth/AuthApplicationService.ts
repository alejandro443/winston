import { AuthenticationApplication } from '@src/core/application/Authentication/AuthenticationApplication';
import { LoginAuthUseCase } from './LoginAuthUseCase';
import { LoginDto } from '@dto/authentication/authentication_dto';

export class AuthenticationApplicationService
  implements AuthenticationApplication
{
  constructor(private loginAuthUseCase?: LoginAuthUseCase) {
    this.loginAuthUseCase = new LoginAuthUseCase();
  }

  async loginAuth(login: LoginDto) {
    try {
      return this.loginAuthUseCase.loginAuth(login);
    } catch (error) {
      return error;
    }
  }
}
