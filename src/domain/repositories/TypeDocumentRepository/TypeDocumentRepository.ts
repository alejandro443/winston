import {
  NewTypeDocumentDto,
  UpdateTypeDocumentDto,
} from 'src/core/shared/dto/TypeDocument/type_document_dto';
import { TypeDocument } from 'src/domain/entities/TypeDocument.entity';

export class TypeDocumentRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return TypeDocument.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return TypeDocument.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(type_document: NewTypeDocumentDto) {
    try {
      return TypeDocument.create(type_document);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, type_document: UpdateTypeDocumentDto) {
    try {
      return TypeDocument.update(type_document, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return TypeDocument.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
