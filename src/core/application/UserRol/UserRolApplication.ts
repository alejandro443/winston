import { NewUserRolDto } from '@dto/UserRol/new_user_rol_dto';

export interface UserRolApplication {
  createUserRol(newUserRol: NewUserRolDto): Promise<number>;
}
