import {
  AllUserDto,
  NewUserDto,
  NewUserWithPersonDto,
  OneUserDto,
  UpdateUserDto,
} from 'src/core/shared/dto/User/user_dto';

export interface UserApplication {
  getAllUser(): Promise<Array<AllUserDto>>;
  getAllUserWithRoles(): Promise<Array<AllUserDto>>;
  getOneUser(id: any): Promise<OneUserDto>;
  createUser(user: NewUserDto): Promise<OneUserDto>;
  updateUser(id: any, user: UpdateUserDto): Promise<OneUserDto>;
  deleteUser(id: any): any;

  createUserWithPerson(user: NewUserWithPersonDto): Promise<any>;
  getAllUserSellers(): Promise<Array<AllUserDto>>;
  getAllUserWorkers(): Promise<Array<AllUserDto>>;

}
