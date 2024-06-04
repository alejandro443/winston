import { IssuableDocumentRepository } from 'src/domain/repositories/IssuableDocumentRepository/IssuableDocumentRepository';

export class IssuableDocumentService {
  constructor(private repository?: IssuableDocumentRepository) {
    this.repository = new IssuableDocumentRepository();
  }

  async getAllIssuableDocument() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }
}
