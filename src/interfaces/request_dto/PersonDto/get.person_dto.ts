import { PickType } from '@nestjs/swagger';
import { PersonDto } from 'src/core/shared/dto/Person/person_dto';

export class GetPersonRequestDto extends PickType(PersonDto, ['main_identification'] as const) { }