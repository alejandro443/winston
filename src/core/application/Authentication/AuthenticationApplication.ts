import { LoginDto } from '@src/core/shared/dto/authentication/authentication_dto';
import { LoginResponseDto } from '@src/interfaces/request_dto/AuthDto/login.auth_dto';

export interface AuthenticationApplication {
  loginAuth(
    authentication: LoginDto,
  ): Promise<LoginResponseDto>;
}
