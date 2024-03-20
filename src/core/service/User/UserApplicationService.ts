import { UserApplication } from 'src/core/application/User/UserApplication';
import { NewUserDto, UpdateUserDto } from '@dto/User/user_dto';
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
      return this.getAllUseCase.getAllUser();
    } catch (error) {
      return error;
    }
  }

  async getOneUser(user_code: string) {
    try {
      return this.getOneUseCase.getOneUser(user_code);
    } catch (error) {
      return error;
    }
  }

  async createUser(user: NewUserDto) {
    try {
      return this.createUseCase.createUser(user);
    } catch (error) {
      return error;
    }
  }

  async updateUser(code: string, user: UpdateUserDto) {
    try {
      return this.updateUseCase.updateUser(code, user);
    } catch (error) {
      return error;
    }
  }

  async deleteUser(code: string) {
    try {
      return this.deleteUseCase.deleteUser(code);
    } catch (error) {
      return error;
    }
  }
}
