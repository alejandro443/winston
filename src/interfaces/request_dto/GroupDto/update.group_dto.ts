import { GroupDto } from '@src/core/shared/dto/Group/group_dto';

export type UpdateGroupRequestDto = Omit<GroupDto, 'id, created_at'>;
