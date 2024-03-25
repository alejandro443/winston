import {
  AllUserAccessDto,
  NewUserAccessDto,
  OneUserAccessDto,
  UpdateUserAccessDto,
} from '@src/core/shared/dto/UserAccess/user_access_dto';

export interface UserAccessApplication {
  getAllUserAccess(): Promise<Array<AllUserAccessDto>>;
  getOneUserAccess(code: any): Promise<OneUserAccessDto>;
  createUserAccess(client: NewUserAccessDto): Promise<OneUserAccessDto>;
  updateUserAccess(
    code: any,
    client: UpdateUserAccessDto,
  ): Promise<OneUserAccessDto>;
  deleteUserAccess(code: any): any;
}
