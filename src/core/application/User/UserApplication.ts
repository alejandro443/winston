import {
  AllUserDto,
  NewUserDto,
  OneUserDto,
  UpdateUserDto,
} from '@src/core/shared/dto/User/user_dto';

export interface UserApplication {
  getAllUser(): Promise<Array<AllUserDto>>;
  getOneUser(code: string): Promise<OneUserDto>;
  createUser(classification: NewUserDto): Promise<OneUserDto>;
  updateUser(code: string, classification: UpdateUserDto): Promise<OneUserDto>;
  deleteUser(code: string);
}
