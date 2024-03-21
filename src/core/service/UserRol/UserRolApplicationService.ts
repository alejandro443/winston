import { UserRolApplication } from 'src/core/application/UserRol/UserRolApplication';
import {
  NewUserRolDto,
  UpdateUserRolDto,
} from '@dto/UserRol/user_rol_dto';
import { GetOneUserRolUseCase } from './GetOneUserRolUseCase';
import { GetAllUserRolUseCase } from './GetAllUserRolUseCase';
import { UpdateUserRolUseCase } from './UpdateUserRolUseCase';
import { DeleteUserRolUseCase } from './DeleteUserRolUseCase';
import { CreateUserRolUseCase } from '../UserRol/CreateUserRolUseCase';

export class UserRolApplicationService
  implements UserRolApplication
{
  constructor(
    private getOneUseCase?: GetOneUserRolUseCase,
    private getAllUseCase?: GetAllUserRolUseCase,
    private createUseCase?: CreateUserRolUseCase,
    private updateUseCase?: UpdateUserRolUseCase,
    private deleteUseCase?: DeleteUserRolUseCase,
  ) {
    this.getOneUseCase = new GetOneUserRolUseCase();
    this.getAllUseCase = new GetAllUserRolUseCase();
    this.createUseCase = new CreateUserRolUseCase();
    this.updateUseCase = new UpdateUserRolUseCase();
    this.deleteUseCase = new DeleteUserRolUseCase();
  }

  async getAllUserRol() {
    try {
      return this.getAllUseCase.getAllUserRol();
    } catch (error) {
      return error;
    }
  }

  async getOneUserRol(user_rol_id: number) {
    try {
      return this.getOneUseCase.getOneUserRol(user_rol_id);
    } catch (error) {
      return error;
    }
  }

  async createUserRol(user_rol: NewUserRolDto) {
    try {
      return this.createUseCase.createUserRol(user_rol);
    } catch (error) {
      return error;
    }
  }

  async updateUserRol(
    id: number,
    user_rol: UpdateUserRolDto,
  ) {
    try {
      return this.updateUseCase.updateUserRol(id, user_rol);
    } catch (error) {
      return error;
    }
  }

  async deleteUserRol(id: number) {
    try {
      return this.deleteUseCase.deleteUserRol(id);
    } catch (error) {
      return error;
    }
  }
}
