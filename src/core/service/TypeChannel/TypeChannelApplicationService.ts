import { TypeChannelApplication } from 'src/core/application/TypeChannel/TypeChannelApplication';
import {
  NewTypeChannelDto,
  UpdateTypeChannelDto,
} from 'src/core/shared/dto/TypeChannel/type_channel_dto';
import { GetOneTypeChannelUseCase } from './GetOneTypeChannelUseCase';
import { GetAllTypeChannelUseCase } from './GetAllTypeChannelUseCase';
import { CreateTypeChannelUseCase } from './CreateTypeChannelUseCase';
import { UpdateTypeChannelUseCase } from './UpdateTypeChannelUseCase';
import { DeleteTypeChannelUseCase } from './DeleteTypeChannelUseCase';

export class TypeChannelApplicationService implements TypeChannelApplication {
  constructor(
    private getOneUseCase?: GetOneTypeChannelUseCase,
    private getAllUseCase?: GetAllTypeChannelUseCase,
    private createUseCase?: CreateTypeChannelUseCase,
    private updateUseCase?: UpdateTypeChannelUseCase,
    private deleteUseCase?: DeleteTypeChannelUseCase,
  ) {
    this.getOneUseCase = new GetOneTypeChannelUseCase();
    this.getAllUseCase = new GetAllTypeChannelUseCase();
    this.createUseCase = new CreateTypeChannelUseCase();
    this.updateUseCase = new UpdateTypeChannelUseCase();
    this.deleteUseCase = new DeleteTypeChannelUseCase();
  }

  async getAllTypeChannel() {
    try {
      return this.getAllUseCase?.getAllTypeChannel();
    } catch (error: any) {
      return error;
    }
  }

  async getOneTypeChannel(id_type_channel: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneTypeChannel(id_type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async createTypeChannel(type_channel: NewTypeChannelDto): Promise<any> {
    try {
      return this.createUseCase?.createTypeChannel(type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async updateTypeChannel(
    id_type_channel: any,
    type_channel: UpdateTypeChannelDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateTypeChannel(id_type_channel, type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async deleteTypeChannel(id_type_channel: number) {
    try {
      return this.deleteUseCase?.deleteTypeChannel(id_type_channel);
    } catch (error: any) {
      return error;
    }
  }
}
