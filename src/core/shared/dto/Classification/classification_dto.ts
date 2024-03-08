interface ClassificationDto {
  id?: number;
  name?: string;
  description?: string;
  code?: string;
  status?: boolean;
}

export interface OneClassificationDto extends ClassificationDto {}
export interface AllClassificationDto extends ClassificationDto {}
export interface NewClassificationDto extends Omit<ClassificationDto, 'id'> {}
export interface UpdateClassificationDto extends Omit<ClassificationDto, 'id'> {}