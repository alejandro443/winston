import {
  NewClassificationDto,
  UpdateClassificationDto,
} from 'src/core/shared/dto/Classification/classification_dto';
import { Classification } from 'src/domain/entities/Classification.entity';

export class ClassificationRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Classification.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Classification.findAll({ where: { deleted_at: '' } });
    } catch (error: any) {
      return error;
    }
  }

  async create(classification: any) {
    try {
      return Classification.create(classification);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, classification: UpdateClassificationDto) {
    try {
      return Classification.update(classification, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Classification.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
