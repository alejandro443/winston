import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

export class CreateClientRequestDto
  extends ClientDto
  implements Omit<ClientDto, 'id, created_at'> {}
