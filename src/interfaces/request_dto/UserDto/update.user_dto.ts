import { UserDto } from '@src/core/shared/dto/User/user_dto';

export type UpdateUserRequestDto = Omit<UserDto, 'id'>;