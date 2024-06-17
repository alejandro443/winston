import { OmitType } from '@nestjs/swagger';
import { PersonDto } from 'src/core/shared/dto/Person/person_dto';

export class CreatePersonRequestDto extends
  OmitType(PersonDto, ['id', 'created_at'] as const) { }