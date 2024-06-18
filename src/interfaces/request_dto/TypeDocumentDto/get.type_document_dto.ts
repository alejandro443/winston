import { PickType } from '@nestjs/swagger';
import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export class GetTypeDocumentRequestDto extends PickType(TypeDocumentDto, ['id'] as const) { }
