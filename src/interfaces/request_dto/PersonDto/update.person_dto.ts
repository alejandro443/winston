import { OmitType } from '@nestjs/mapped-types';
import { PersonDto } from 'src/core/shared/dto/Person/person_dto';

export class UpdatePersonRequestDto extends
  OmitType(PersonDto, ['id', 'created_at'] as const) { }