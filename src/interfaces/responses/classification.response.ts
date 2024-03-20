import { ApiProperty } from '@nestjs/swagger';
import { ClassificationDto } from '@src/core/shared/dto/Classification/classification_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ClassificationResponse extends AppResponse {
  @ApiProperty({
    type: ClassificationDto,
    nullable: true,
  })
  data?: object;
}

export class ClassificationsResponse extends AppResponse {
  @ApiProperty({
    type: [ClassificationDto],
    nullable: true,
  })
  data?: ClassificationDto[];
}
