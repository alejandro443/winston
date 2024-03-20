import { ClassificationApplication } from 'src/core/application/Classification/ClassificationApplication';
import {
  NewClassificationDto,
  UpdateClassificationDto,
} from '@dto/Classification/classification_dto';
import { GetOneClassificationUseCase } from './GetOneClassificationUseCase';
import { GetAllClassificationUseCase } from './GetAllClassificationUseCase';
import { CreateClassificationUseCase } from './CreateClassificationUseCase';
import { UpdateClassificationUseCase } from './UpdateClassificationUseCase';
import { DeleteClassificationUseCase } from './DeleteClassificationUseCase';

export class ClassificationApplicationService
  implements ClassificationApplication
{
  constructor(
    private getOneUseCase?: GetOneClassificationUseCase,
    private getAllUseCase?: GetAllClassificationUseCase,
    private createUseCase?: CreateClassificationUseCase,
    private updateUseCase?: UpdateClassificationUseCase,
    private deleteUseCase?: DeleteClassificationUseCase,
  ) {
    this.getOneUseCase = new GetOneClassificationUseCase();
    this.getAllUseCase = new GetAllClassificationUseCase();
    this.createUseCase = new CreateClassificationUseCase();
    this.updateUseCase = new UpdateClassificationUseCase();
    this.deleteUseCase = new DeleteClassificationUseCase();
  }

  async getAllClassification() {
    try {
      return this.getAllUseCase.getAllClassification();
    } catch (error) {
      return error;
    }
  }

  async getOneClassification(classification_code: string) {
    try {
      return this.getOneUseCase.getOneClassification(classification_code);
    } catch (error) {
      return error;
    }
  }

  async createClassification(classification: NewClassificationDto) {
    try {
      return this.createUseCase.createClassification(classification);
    } catch (error) {
      return error;
    }
  }

  async updateClassification(
    code: string,
    classification: UpdateClassificationDto,
  ) {
    try {
      return this.updateUseCase.updateClassification(code, classification);
    } catch (error) {
      return error;
    }
  }

  async deleteClassification(code: string) {
    try {
      return this.deleteUseCase.deleteClassification(code);
    } catch (error) {
      return error;
    }
  }
}
