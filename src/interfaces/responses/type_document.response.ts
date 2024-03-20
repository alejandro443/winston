import { ApiProperty } from '@nestjs/swagger';
import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class TypeDocumentResponse extends AppResponse {
  @ApiProperty({
    type: TypeDocumentDto,
    nullable: true,
  })
  data?: object;
}

export class TypesDocumentsResponse extends AppResponse {
  @ApiProperty({
    type: [TypeDocumentDto],
    nullable: true,
  })
  data?: TypeDocumentDto[];
}
