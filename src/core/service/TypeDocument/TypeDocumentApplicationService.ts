import { TypeDocumentApplication } from 'src/core/application/TypeDocument/TypeDocumentApplication';
import {
  NewTypeDocumentDto,
  UpdateTypeDocumentDto,
} from 'src/core/shared/dto/TypeDocument/type_document_dto';
import { GetOneTypeDocumentUseCase } from './GetOneTypeDocumentUseCase';
import { GetAllTypeDocumentUseCase } from './GetAllTypeDocumentUseCase';
import { CreateTypeDocumentUseCase } from './CreateTypeDocumentUseCase';
import { UpdateTypeDocumentUseCase } from './UpdateTypeDocumentUseCase';
import { DeleteTypeDocumentUseCase } from './DeleteTypeDocumentUseCase';

export class TypeDocumentApplicationService implements TypeDocumentApplication {
  constructor(
    private getOneUseCase?: GetOneTypeDocumentUseCase,
    private getAllUseCase?: GetAllTypeDocumentUseCase,
    private createUseCase?: CreateTypeDocumentUseCase,
    private updateUseCase?: UpdateTypeDocumentUseCase,
    private deleteUseCase?: DeleteTypeDocumentUseCase,
  ) {
    this.getOneUseCase = new GetOneTypeDocumentUseCase();
    this.getAllUseCase = new GetAllTypeDocumentUseCase();
    this.createUseCase = new CreateTypeDocumentUseCase();
    this.updateUseCase = new UpdateTypeDocumentUseCase();
    this.deleteUseCase = new DeleteTypeDocumentUseCase();
  }

  async getAllTypeDocument() {
    try {
      return this.getAllUseCase.getAllTypeDocument();
    } catch (error) {
      return error;
    }
  }

  async getOneTypeDocument(type_document_code: string) {
    try {
      return this.getOneUseCase.getOneTypeDocument(type_document_code);
    } catch (error) {
      return error;
    }
  }

  async createTypeDocument(type_document: NewTypeDocumentDto) {
    try {
      return this.createUseCase.createTypeDocument(type_document);
    } catch (error) {
      return error;
    }
  }

  async updateTypeDocument(code: string, type_document: UpdateTypeDocumentDto) {
    try {
      return this.updateUseCase.updateTypeDocument(code, type_document);
    } catch (error) {
      return error;
    }
  }

  async deleteTypeDocument(code: string) {
    try {
      return this.deleteUseCase.deleteTypeDocument(code);
    } catch (error) {
      return error;
    }
  }
}
