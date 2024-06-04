import { IssuableDocument } from 'src/domain/entities/IssuableDocument.entity';

export class IssuableDocumentRepository {
  constructor() {}

  async findAll() {
    try {
      return IssuableDocument.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }
}
