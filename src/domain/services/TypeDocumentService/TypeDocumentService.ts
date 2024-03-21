import { NewTypeDocumentDto } from '@dto/TypeDocument/type_document_dto';
import { TypeDocumentRepository } from 'src/domain/repositories/TypeDocumentRepository/TypeDocumentRepository';

export class TypeDocumentService {
  constructor(private repository?: TypeDocumentRepository) {
    this.repository = new TypeDocumentRepository();
  }

  async getOneTypeDocument(code: string) {
    try {
      return this.repository.findOne(code);
    } catch (error) {
      return error;
    }
  }

  async getAllTypeDocument() {
    try {
      return this.repository.findAll();
    } catch (error) {
      return error;
    }
  }

  async createTypeDocument(type_document: NewTypeDocumentDto) {
    try {
      return this.repository.create(type_document);
    } catch (error) {
      return error;
    }
  }

  async updateTypeDocument(code: string, type_document: NewTypeDocumentDto) {
    try {
      return this.repository.update(code, type_document);
    } catch (error) {
      return error;
    }
  }

  async deleteTypeDocument(code: string) {
    try {
      return this.repository.deleted(code);
    } catch (error) {
      return error;
    }
  }
}
