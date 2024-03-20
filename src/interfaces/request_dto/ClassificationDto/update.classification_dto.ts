import { AccessDto } from '@src/core/shared/dto/Access/access_dto';

export type UpdateClassificationRequestDto = Omit<AccessDto, 'id'>;
