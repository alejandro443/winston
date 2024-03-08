import { NewAccessDto } from "src/core/shared/dto/Access/new_access_dto";

export interface AccessApplication {
  createAccess(newAccess: NewAccessDto): Promise<number>
}