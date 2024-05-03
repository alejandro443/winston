import { PickType } from '@nestjs/mapped-types';
import { AccessDto } from 'src/core/shared/dto/Access/access_dto';

export class GetAccessRequestDto extends PickType(AccessDto, ['id'] as const) {}
