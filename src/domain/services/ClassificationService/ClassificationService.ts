import { NewClassificationDto } from 'src/core/shared/dto/Classification/classification_dto';
import { ClassificationRepository } from 'src/domain/repositories/ClassificationRepository/ClassificationRepository';

export class ClassificationService {
  constructor(private repository?: ClassificationRepository) {
    this.repository = new ClassificationRepository();
  }

  async getOneClassification(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllClassification() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createClassification(classification: NewClassificationDto) {
    try {
      return this.repository?.create(classification);
    } catch (error: any) {
      return error;
    }
  }

  async updateClassification(code: any, classification: NewClassificationDto) {
    try {
      return this.repository?.update(code, classification);
    } catch (error: any) {
      return error;
    }
  }

  async deleteClassification(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
