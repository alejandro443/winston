import { ClassificationDto } from 'src/core/shared/dto/Classification/classification_dto';

export class CreateClassificationRequestDto
  extends ClassificationDto
  implements Omit<ClassificationDto, 'id, created_at'> {}
