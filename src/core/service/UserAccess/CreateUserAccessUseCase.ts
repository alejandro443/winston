import { NewUserAccessDto } from 'src/core/shared/dto/UserAccess/user_access_dto';
import { UserAccessService } from '@src/domain/services/UserAccessService/UserAccessService';

export class CreateUserAccessUseCase {
  constructor(private userAccessService?: UserAccessService) {
    this.userAccessService = new UserAccessService();
  }

  async createUserAccess(userAccess: NewUserAccessDto) {
    try {
      const response: any =
        await this.userAccessService?.createUserAccess(userAccess);
      return { ...response };
    } catch (error: any) {
      return error;
    }
  }
}
