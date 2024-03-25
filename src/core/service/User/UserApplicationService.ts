import { UserApplication } from 'src/core/application/User/UserApplication';
import { NewUserDto, UpdateUserDto } from 'src/core/shared/dto/User/user_dto';
import { GetOneUserUseCase } from './GetOneUserUseCase';
import { GetAllUserUseCase } from './GetAllUserUseCase';
import { CreateUserUseCase } from './CreateUserUseCase';
import { UpdateUserUseCase } from './UpdateUserUseCase';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class UserApplicationService implements UserApplication {
  constructor(
    private getOneUseCase?: GetOneUserUseCase,
    private getAllUseCase?: GetAllUserUseCase,
    private createUseCase?: CreateUserUseCase,
    private updateUseCase?: UpdateUserUseCase,
    private deleteUseCase?: DeleteUserUseCase,
  ) {
    this.getOneUseCase = new GetOneUserUseCase();
    this.getAllUseCase = new GetAllUserUseCase();
    this.createUseCase = new CreateUserUseCase();
    this.updateUseCase = new UpdateUserUseCase();
    this.deleteUseCase = new DeleteUserUseCase();
  }

  async getAllUser() {
    try {
      return this.getAllUseCase?.getAllUser();
    } catch (error: any) {
      return error;
    }
  }

  async getOneUser(user_code: string) {
    try {
      return this.getOneUseCase?.getOneUser(user_code);
    } catch (error: any) {
      return error;
    }
  }

  async createUser(user: NewUserDto): Promise<any> {
    try {
      return this.createUseCase?.createUser(user);
    } catch (error: any) {
      return error;
    }
  }

  async updateUser(code: any, user: UpdateUserDto) {
    try {
      return this.updateUseCase?.updateUser(code, user);
    } catch (error: any) {
      return error;
    }
  }

  async deleteUser(code: string) {
    try {
      return this.deleteUseCase?.deleteUser(code);
    } catch (error: any) {
      return error;
    }
  }
}
