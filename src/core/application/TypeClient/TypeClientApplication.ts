import {
  AllTypeClientDto,
  NewTypeClientDto,
  OneTypeClientDto,
  UpdateTypeClientDto,
} from '@dto/TypeClient/type_client_dto';

export interface TypeClientApplication {
  getAllTypeClient(): Promise<Array<AllTypeClientDto>>;
  getOneTypeClient(code: string): Promise<OneTypeClientDto>;
  createTypeClient(type_client: NewTypeClientDto): Promise<OneTypeClientDto>;
  updateTypeClient(
    code: string,
    type_client: UpdateTypeClientDto,
  ): Promise<OneTypeClientDto>;
  deleteTypeClient(code: string);
}
