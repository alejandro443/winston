import { PersonDto } from '@dto/Person/person_dto';

export class CreatePersonRequestDto
  extends PersonDto
  implements Omit<PersonDto, 'id, created_at'> {}
