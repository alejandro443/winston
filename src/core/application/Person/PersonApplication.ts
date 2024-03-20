import {
  AllPersonDto,
  NewPersonDto,
  OnePersonDto,
  UpdatePersonDto,
} from '@dto/Person/person_dto';

export interface PersonApplication {
  getAllPerson(): Promise<Array<AllPersonDto>>;
  getOnePerson(code: string): Promise<OnePersonDto>;
  createPerson(classification: NewPersonDto): Promise<OnePersonDto>;
  updatePerson(
    code: string,
    classification: UpdatePersonDto,
  ): Promise<OnePersonDto>;
  deletePerson(code: string);
}
