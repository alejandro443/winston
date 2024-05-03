import { PickType } from '@nestjs/mapped-types';
import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export class GetTypeDocumentRequestDto extends PickType(TypeDocumentDto, ['code'] as const) { }
