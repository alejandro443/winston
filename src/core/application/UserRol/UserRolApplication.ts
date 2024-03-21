import { AllUserRolDto, NewUserRolDto, OneUserRolDto, UpdateUserRolDto } from '@dto/UserRol/user_rol_dto';

export interface UserRolApplication {
  getAllUserRol(): Promise<Array<AllUserRolDto>>;
  getOneUserRol(id: number): Promise<OneUserRolDto>;
  createUserRol(client: NewUserRolDto): Promise<OneUserRolDto>;
  updateUserRol(id: number, client: UpdateUserRolDto): Promise<OneUserRolDto>;
  deleteUserRol(id: number);
}
