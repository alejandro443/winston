import { AccessRolApplication } from 'src/core/application/AccessRol/AccessRolApplication';
import {
  NewAccessRolDto,
  UpdateAccessRolDto,
} from '@dto/AccessRol/access_rol_dto';
import { GetOneAccessRolUseCase } from './GetOneUserAccessUseCase';
import { GetAllAccessRolUseCase } from './GetAllUserAccessUseCase';
import { UpdateAccessRolUseCase } from './UpdateUserAccessUseCase';
import { DeleteAccessRolUseCase } from './DeleteUserAccessUseCase';
import { CreateAccessRolUseCase } from '../AccessRol/CreateAccessRolUseCase';

export class AccessRolApplicationService
  implements AccessRolApplication
{
  constructor(
    private getOneUseCase?: GetOneAccessRolUseCase,
    private getAllUseCase?: GetAllAccessRolUseCase,
    private createUseCase?: CreateAccessRolUseCase,
    private updateUseCase?: UpdateAccessRolUseCase,
    private deleteUseCase?: DeleteAccessRolUseCase,
  ) {
    this.getOneUseCase = new GetOneAccessRolUseCase();
    this.getAllUseCase = new GetAllAccessRolUseCase();
    this.createUseCase = new CreateAccessRolUseCase();
    this.updateUseCase = new UpdateAccessRolUseCase();
    this.deleteUseCase = new DeleteAccessRolUseCase();
  }

  async getAllAccessRol() {
    try {
      return this.getAllUseCase.getAllAccessRol();
    } catch (error) {
      return error;
    }
  }

  async getOneAccessRol(access_rol_id: number) {
    try {
      return this.getOneUseCase.getOneAccessRol(access_rol_id);
    } catch (error) {
      return error;
    }
  }

  async createAccessRol(access_rol: NewAccessRolDto) {
    try {
      return this.createUseCase.createAccessRol(access_rol);
    } catch (error) {
      return error;
    }
  }

  async updateAccessRol(
    id: number,
    access_rol: UpdateAccessRolDto,
  ) {
    try {
      return this.updateUseCase.updateAccessRol(id, access_rol);
    } catch (error) {
      return error;
    }
  }

  async deleteAccessRol(id: number) {
    try {
      return this.deleteUseCase.deleteAccessRol(id);
    } catch (error) {
      return error;
    }
  }
}
