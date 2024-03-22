import { AccessApplication } from 'src/core/application/Access/AccessApplication';
import {
  NewAccessDto,
  UpdateAccessDto,
} from 'src/core/shared/dto/Access/access_dto';
import { GetOneAccessUseCase } from './GetOneAccessUseCase';
import { GetAllAccessUseCase } from './GetAllAccessUseCase';
import { CreateAccessUseCase } from './CreateAccessUseCase';
import { UpdateAccessUseCase } from './UpdateAccessUseCase';
import { DeleteAccessUseCase } from './DeleteAccessUseCase';

export class AccessApplicationService
  implements AccessApplication
{
  constructor(
    private getOneUseCase?: GetOneAccessUseCase,
    private getAllUseCase?: GetAllAccessUseCase,
    private createUseCase?: CreateAccessUseCase,
    private updateUseCase?: UpdateAccessUseCase,
    private deleteUseCase?: DeleteAccessUseCase,
  ) {
    this.getOneUseCase = new GetOneAccessUseCase();
    this.getAllUseCase = new GetAllAccessUseCase();
    this.createUseCase = new CreateAccessUseCase();
    this.updateUseCase = new UpdateAccessUseCase();
    this.deleteUseCase = new DeleteAccessUseCase();
  }

  async getAllAccess() {
    try {
      return this.getAllUseCase.getAllAccess();
    } catch (error) {
      return error;
    }
  }

  async getOneAccess(access_id: number) {
    try {
      return this.getOneUseCase.getOneAccess(access_id);
    } catch (error) {
      return error;
    }
  }

  async createAccess(access: NewAccessDto) {
    try {
      return this.createUseCase.createAccess(access);
    } catch (error) {
      return error;
    }
  }

  async updateAccess(
    id: number,
    access: UpdateAccessDto,
  ) {
    try {
      return this.updateUseCase.updateAccess(id, access);
    } catch (error) {
      return error;
    }
  }

  async deleteAccess(id: number) {
    try {
      return this.deleteUseCase.deleteAccess(id);
    } catch (error) {
      return error;
    }
  }
}
