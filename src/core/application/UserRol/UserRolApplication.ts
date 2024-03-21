import { AllUserRolDto, NewUserRolDto, OneUserRolDto, UpdateUserRolDto } from '@dto/UserRol/user_rol_dto';

export interface UserRolApplication {
  getAllUserRol(): Promise<Array<AllUserRolDto>>;
  getOneUserRol(code: string): Promise<OneUserRolDto>;
  createUserRol(client: NewUserRolDto): Promise<OneUserRolDto>;
  updateUserRol(code: string, client: UpdateUserRolDto): Promise<OneUserRolDto>;
  deleteUserRol(code: string);
}
