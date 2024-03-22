import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export class CreateTypeClientRequestDto
  extends TypeClientDto
  implements Omit<TypeClientDto, 'id, created_at'> {}
