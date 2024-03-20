import { PersonDto } from '@@dto/Person/person_dto';

export type GetPersonRequestDto = Pick<PersonDto, 'main_identification'>;
