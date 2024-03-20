import { PersonDto } from '@src/core/shared/dto/Person/person_dto';

export type UpdatePersonRequestDto = Omit<PersonDto, 'id'>;
