import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { PersonDto } from '@dto/Person/person_dto';

export class PersonResponse extends AppResponse {
  @ApiProperty({
    type: PersonDto,
    nullable: true,
  })
  data?: object;
}

export class PersonsResponse extends AppResponse {
  @ApiProperty({
    type: [PersonDto],
    nullable: true,
  })
  data?: PersonDto[];
}
