import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export type GetTypeClientRequestDto = Pick<TypeClientDto, 'code'>;
