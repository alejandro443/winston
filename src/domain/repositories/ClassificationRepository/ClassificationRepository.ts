import {
  NewClassificationDto,
  UpdateClassificationDto,
} from '@dto/Classification/classification_dto';
import { Classification } from 'src/domain/entities/Classification.entity';

export class ClassificationRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Classification.findOne({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Classification.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(classification: NewClassificationDto) {
    try {
      return Classification.create(classification);
    } catch (error) {
      return error;
    }
  }

  async update(code: string, classification: UpdateClassificationDto) {
    try {
      return Classification.update(classification, { where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Classification.destroy({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }
}
