import { NewTypeDocumentDto } from 'src/core/shared/dto/TypeDocument/type_document_dto';
import { TypeDocumentRepository } from 'src/domain/repositories/TypeDocumentRepository/TypeDocumentRepository';

export class TypeDocumentService {
  constructor(private repository?: TypeDocumentRepository) {
    this.repository = new TypeDocumentRepository();
  }

  async getOneTypeDocument(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllTypeDocument() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createTypeDocument(type_document: NewTypeDocumentDto) {
    try {
      return this.repository?.create(type_document);
    } catch (error: any) {
      return error;
    }
  }

  async updateTypeDocument(code: any, type_document: NewTypeDocumentDto) {
    try {
      return this.repository?.update(code, type_document);
    } catch (error: any) {
      return error;
    }
  }

  async deleteTypeDocument(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
