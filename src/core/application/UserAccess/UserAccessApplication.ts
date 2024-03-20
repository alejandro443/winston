import { NewUserAccessDto } from '@dto/UserAccess/new_user_access_dto';

export interface UserAccessApplication {
  createUserAccess(newUserAccess: NewUserAccessDto): Promise<number>;
}
