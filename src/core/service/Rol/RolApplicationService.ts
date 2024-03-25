import { RolApplication } from 'src/core/application/Rol/RolApplication';
import { NewRolDto, UpdateRolDto } from 'src/core/shared/dto/Rol/rol_dto';
import { GetOneRolUseCase } from './GetOneRolUseCase';
import { GetAllRolUseCase } from './GetAllRolUseCase';
import { CreateRolUseCase } from './CreateRolUseCase';
import { UpdateRolUseCase } from './UpdateRolUseCase';
import { DeleteRolUseCase } from './DeleteRolUseCase';

export class RolApplicationService implements RolApplication {
  constructor(
    private getOneUseCase?: GetOneRolUseCase,
    private getAllUseCase?: GetAllRolUseCase,
    private createUseCase?: CreateRolUseCase,
    private updateUseCase?: UpdateRolUseCase,
    private deleteUseCase?: DeleteRolUseCase,
  ) {
    this.getOneUseCase = new GetOneRolUseCase();
    this.getAllUseCase = new GetAllRolUseCase();
    this.createUseCase = new CreateRolUseCase();
    this.updateUseCase = new UpdateRolUseCase();
    this.deleteUseCase = new DeleteRolUseCase();
  }

  async getAllRol() {
    try {
      return this.getAllUseCase?.getAllRol();
    } catch (error: any) {
      return error;
    }
  }

  async getOneRol(rol_id: number) {
    try {
      return this.getOneUseCase?.getOneRol(rol_id);
    } catch (error: any) {
      return error;
    }
  }

  async createRol(rol: NewRolDto): Promise<any> {
    try {
      return this.createUseCase?.createRol(rol);
    } catch (error: any) {
      return error;
    }
  }

  async updateRol(id: number, rol: UpdateRolDto) {
    try {
      return this.updateUseCase?.updateRol(id, rol);
    } catch (error: any) {
      return error;
    }
  }

  async deleteRol(id: number) {
    try {
      return this.deleteUseCase?.deleteRol(id);
    } catch (error: any) {
      return error;
    }
  }
}
