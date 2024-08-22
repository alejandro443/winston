import { ApiProperty } from '@nestjs/swagger';
import { BusinessTurnDto } from '@src/core/shared/dto/BusinessTurn/business_turn_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class BusinessTurnResponse extends AppResponse {
  @ApiProperty({
    type: BusinessTurnDto,
    nullable: true,
  })
  data?: object;
}

export class BusinessTurnsResponse extends AppResponse {
  @ApiProperty({
    type: [BusinessTurnDto],
    nullable: true,
  })
  data?: BusinessTurnDto[];
}
