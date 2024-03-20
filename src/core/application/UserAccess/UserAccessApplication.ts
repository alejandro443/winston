import { NewUserAccessDto } from '@src/core/shared/dto/UserAccess/user_access_dto';

export interface UserAccessApplication {
  createUserAccess(newUserAccess: NewUserAccessDto): Promise<number>;
}
