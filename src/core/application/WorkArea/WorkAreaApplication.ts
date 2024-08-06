import {
  AllWorkAreaDto,
  NewWorkAreaDto,
  OneWorkAreaDto,
  UpdateWorkAreaDto,
} from 'src/core/shared/dto/WorkArea/work_area_dto';

export interface WorkAreaApplication {
  getAllWorkArea(): Promise<Array<AllWorkAreaDto>>;
  getOneWorkArea(id: any): Promise<OneWorkAreaDto>;
  createWorkArea(work_area: NewWorkAreaDto): Promise<OneWorkAreaDto>;
  updateWorkArea(
    id: any,
    work_area: UpdateWorkAreaDto,
  ): Promise<OneWorkAreaDto>;
  deleteWorkArea(id: any): any;
}
