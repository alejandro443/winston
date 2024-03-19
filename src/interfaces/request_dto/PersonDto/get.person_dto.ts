import { PersonDto } from '@src/core/shared/dto/Person/person_dto';

export type GetPersonRequestDto = Pick<PersonDto, 'main_identification'>;
