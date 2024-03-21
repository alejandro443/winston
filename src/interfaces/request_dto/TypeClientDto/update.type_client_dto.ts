import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export type UpdateTypeClientRequestDto = Omit<TypeClientDto, 'id, created_at'>;
