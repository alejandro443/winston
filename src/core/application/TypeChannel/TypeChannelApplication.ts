import {
  AllTypeChannelDto,
  NewTypeChannelDto,
  OneTypeChannelDto,
  UpdateTypeChannelDto,
} from 'src/core/shared/dto/TypeChannel/type_channel_dto';

export interface TypeChannelApplication {
  getAllTypeChannel(): Promise<Array<AllTypeChannelDto>>;
  getOneTypeChannel(id: any): Promise<OneTypeChannelDto>;
  createTypeChannel(type_channel: NewTypeChannelDto): Promise<OneTypeChannelDto>;
  updateTypeChannel(
    id: any,
    type_channel: UpdateTypeChannelDto,
  ): Promise<OneTypeChannelDto>;
  deleteTypeChannel(id: any): any;
}
