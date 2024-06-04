import { IssuableDocumentApplication } from 'src/core/application/IssuableDocument/IssuableDocumentApplication';
import { GetAllIssuableDocumentUseCase } from './GetAllIssuableDocumentUseCase';

export class IssuableDocumentApplicationService implements IssuableDocumentApplication {
  constructor(
    private getAllUseCase?: GetAllIssuableDocumentUseCase
  ) {
    this.getAllUseCase = new GetAllIssuableDocumentUseCase();
  }

  async getAllIssuableDocument() {
    try {
      return this.getAllUseCase?.getAllIssuableDocument();
    } catch (error: any) {
      return error;
    }
  }
}
