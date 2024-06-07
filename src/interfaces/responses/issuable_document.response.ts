import { ApiProperty } from '@nestjs/swagger';
import { IssuableDocumentDto } from '@src/core/shared/dto/IssuableDocument/issuable_document_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class IssuableDocumentResponse extends AppResponse {
  @ApiProperty({
    type: IssuableDocumentDto,
    nullable: true,
  })
  data?: object;
}

export class IssuableDocumentsResponse extends AppResponse {
  @ApiProperty({
    type: [IssuableDocumentDto],
    nullable: true,
  })
  data?: IssuableDocumentDto[];
}
