import { PickType } from '@nestjs/mapped-types';
import { PersonDto } from 'src/core/shared/dto/Person/person_dto';

export class GetPersonRequestDto extends PickType(PersonDto, ['main_identification'] as const) { }