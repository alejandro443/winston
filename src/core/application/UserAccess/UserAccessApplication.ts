import { AllUserAccessDto, NewUserAccessDto, OneUserAccessDto, UpdateUserAccessDto } from '@src/core/shared/dto/UserAccess/user_access_dto';

export interface UserAccessApplication {
  getAllUserAccess(): Promise<Array<AllUserAccessDto>>;
  getOneUserAccess(code: string): Promise<OneUserAccessDto>;
  createUserAccess(client: NewUserAccessDto): Promise<OneUserAccessDto>;
  updateUserAccess(code: string, client: UpdateUserAccessDto): Promise<OneUserAccessDto>;
  deleteUserAccess(code: string);
}
