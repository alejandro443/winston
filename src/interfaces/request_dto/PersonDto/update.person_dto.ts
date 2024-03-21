import { PersonDto } from '@dto/Person/person_dto';

export type UpdatePersonRequestDto = Omit<PersonDto, 'id, created_at'>;