import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

export type GetClientRequestDto = Pick<ClientDto, 'code'>;