// import { LoginDto } from '@src/core/shared/dto/Authentication/authentication_dto';
import { LoginResponseDto } from '@src/interfaces/request_dto/AuthDto/login.auth_dto';

export interface AuthenticationApplication {
  loginAuth(authentication: any): Promise<LoginResponseDto>;
}
