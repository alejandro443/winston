import { AccessDto } from '@dto/Access/access_dto';

export type UpdateAccessRequestDto = Omit<AccessDto, 'id'>;
