import { AccessDto } from 'src/core/shared/dto/Access/access_dto';

export class CreateAccessRequestDto
  extends AccessDto
  implements Omit<AccessDto, 'id, created_at'> {}
