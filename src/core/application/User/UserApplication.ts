import {
  AllUserDto,
  NewUserDto,
  OneUserDto,
  UpdateUserDto,
} from 'src/core/shared/dto/User/user_dto';

export interface UserApplication {
  getAllUser(): Promise<Array<AllUserDto>>;
  getOneUser(code: any): Promise<OneUserDto>;
  createUser(classification: NewUserDto): Promise<OneUserDto>;
  updateUser(code: any, classification: UpdateUserDto): Promise<OneUserDto>;
  deleteUser(code: any): any;
}
