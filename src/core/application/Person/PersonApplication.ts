import {
  AllPersonDto,
  NewPersonDto,
  OnePersonDto,
  UpdatePersonDto,
} from 'src/core/shared/dto/Person/person_dto';

export interface PersonApplication {
  getAllPerson(): Promise<Array<AllPersonDto>>;
  getOnePerson(identification: any): Promise<OnePersonDto>;
  createPerson(body: NewPersonDto): Promise<OnePersonDto>;
  updatePerson(
    identification: any,
    body: UpdatePersonDto,
  ): Promise<OnePersonDto>;
  deletePerson(identification: any): any;
}
