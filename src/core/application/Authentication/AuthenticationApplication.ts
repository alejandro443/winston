// import { LoginDto } from '@src/core/shared/dto/Authentication/authentication_dto';
import { LoginRequestDto, LoginResponseDto } from '@src/interfaces/request_dto/AuthDto/login.auth_dto';

export interface AuthenticationApplication {
  loginAuth(authentication: LoginRequestDto): Promise<LoginResponseDto>;
}
