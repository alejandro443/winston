import { PickType } from '@nestjs/mapped-types';
import { GroupDto } from '@src/core/shared/dto/Group/group_dto';

export class GetGroupRequestDto extends PickType(GroupDto, ['code'] as const) { }
