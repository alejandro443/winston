import { PersonDto } from '@src/core/shared/dto/Person/person_dto';

export type CreatePersonRequestDto = Omit<PersonDto, 'id'>;
