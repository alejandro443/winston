import {
  AllUserDto,
  NewUserDto,
  NewUserWithPersonDto,
  OneUserDto,
  UpdateUserDto,
} from 'src/core/shared/dto/User/user_dto';

export interface UserApplication {
  getAllUser(): Promise<Array<AllUserDto>>;
  getOneUser(id: any): Promise<OneUserDto>;
  createUser(classification: NewUserDto): Promise<OneUserDto>;
  updateUser(id: any, classification: UpdateUserDto): Promise<OneUserDto>;
  deleteUser(id: any): any;

  createUserWithPerson(classification: NewUserWithPersonDto): Promise<any>;
}
