import { GroupDto } from '@src/core/shared/dto/Group/group_dto';

export type GetGroupRequestDto = Pick<GroupDto, 'code'>;
