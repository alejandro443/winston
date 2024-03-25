import {
  AllPersonDto,
  NewPersonDto,
  OnePersonDto,
  UpdatePersonDto,
} from 'src/core/shared/dto/Person/person_dto';

export interface PersonApplication {
  getAllPerson(): Promise<Array<AllPersonDto>>;
  getOnePerson(code: any): Promise<OnePersonDto>;
  createPerson(classification: NewPersonDto): Promise<OnePersonDto>;
  updatePerson(
    code: any,
    classification: UpdatePersonDto,
  ): Promise<OnePersonDto>;
  deletePerson(code: any): any;
}
