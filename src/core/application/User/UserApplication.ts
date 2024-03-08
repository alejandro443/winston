import { NewUserDto } from "src/core/shared/dto/User/new_user_dto";

export interface UserApplication {
  createUser(newUser: NewUserDto): Promise<number>
}