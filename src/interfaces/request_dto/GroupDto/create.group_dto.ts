import { GroupDto } from '@src/core/shared/dto/Group/group_dto';

export class CreateGroupRequestDto
  extends GroupDto
  implements Omit<GroupDto, 'id, created_at'> {}