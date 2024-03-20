import { AccessDto } from '@dto/Access/access_dto';

export class CreateAccessRequestDto
  extends AccessDto
  implements Omit<AccessDto, 'id'> {}
