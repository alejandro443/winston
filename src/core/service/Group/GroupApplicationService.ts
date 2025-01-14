import { GroupApplication } from 'src/core/application/Group/GroupApplication';
import {
  NewGroupDto,
  UpdateGroupDto,
} from 'src/core/shared/dto/Group/group_dto';
import { GetOneGroupUseCase } from './GetOneGroupUseCase';
import { GetAllGroupUseCase } from './GetAllGroupUseCase';
import { CreateGroupUseCase } from './CreateGroupUseCase';
import { UpdateGroupUseCase } from './UpdateGroupUseCase';
import { DeleteGroupUseCase } from './DeleteGroupUseCase';

export class GroupApplicationService implements GroupApplication {
  constructor(
    private getOneUseCase?: GetOneGroupUseCase,
    private getAllUseCase?: GetAllGroupUseCase,
    private createUseCase?: CreateGroupUseCase,
    private updateUseCase?: UpdateGroupUseCase,
    private deleteUseCase?: DeleteGroupUseCase,
  ) {
    this.getOneUseCase = new GetOneGroupUseCase();
    this.getAllUseCase = new GetAllGroupUseCase();
    this.createUseCase = new CreateGroupUseCase();
    this.updateUseCase = new UpdateGroupUseCase();
    this.deleteUseCase = new DeleteGroupUseCase();
  }

  async getAllGroup() {
    try {
      return this.getAllUseCase?.getAllGroup();
    } catch (error: any) {
      return error;
    }
  }

  async getOneGroup(group_code: string): Promise<any> {
    try {
      return this.getOneUseCase?.getOneGroup(group_code);
    } catch (error: any) {
      return error;
    }
  }

  async createGroup(group: NewGroupDto): Promise<any> {
    try {
      return this.createUseCase?.createGroup(group);
    } catch (error: any) {
      return error;
    }
  }

  async updateGroup(code: any, group: UpdateGroupDto): Promise<any> {
    try {
      return this.updateUseCase?.updateGroup(code, group);
    } catch (error: any) {
      return error;
    }
  }

  async deleteGroup(code: string) {
    try {
      return this.deleteUseCase?.deleteGroup(code);
    } catch (error: any) {
      return error;
    }
  }
}
