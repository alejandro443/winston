import {
  AllTypeClientDto,
  NewTypeClientDto,
  OneTypeClientDto,
  UpdateTypeClientDto,
} from 'src/core/shared/dto/TypeClient/type_client_dto';

export interface TypeClientApplication {
  getAllTypeClient(): Promise<Array<AllTypeClientDto>>;
  getOneTypeClient(id: any): Promise<OneTypeClientDto>;
  createTypeClient(type_client: NewTypeClientDto): Promise<OneTypeClientDto>;
  updateTypeClient(
    id: any,
    type_client: UpdateTypeClientDto,
  ): Promise<OneTypeClientDto>;
  deleteTypeClient(id: any): any;
}
