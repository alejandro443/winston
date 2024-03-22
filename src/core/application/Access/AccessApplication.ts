import {
  AllAccessDto,
  NewAccessDto,
  OneAccessDto,
  UpdateAccessDto,
} from 'src/core/shared/dto/Access/access_dto';

export interface AccessApplication {
  getAllAccess(): Promise<Array<AllAccessDto>>;
  getOneAccess(id: number): Promise<OneAccessDto>;
  createAccess(classification: NewAccessDto): Promise<OneAccessDto>;
  updateAccess(
    id: number,
    classification: UpdateAccessDto,
  ): Promise<OneAccessDto>;
  deleteAccess(id: number);
}
