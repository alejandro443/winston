import { NewUserRolDto } from 'src/core/shared/dto/UserRol/new_user_rol_dto';

export interface UserRolApplication {
  createUserRol(newUserRol: NewUserRolDto): Promise<number>;
}
