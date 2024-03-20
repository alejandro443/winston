import { ClassificationDto } from '@dto/Classification/classification_dto';

export class CreateClassificationRequestDto
  extends ClassificationDto
  implements Omit<ClassificationDto, 'id'> {}
