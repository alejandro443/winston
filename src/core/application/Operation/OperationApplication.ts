import {
  AllOperationDto,
  NewOperationDto,
  OneOperationDto,
  UpdateOperationDto,
} from 'src/core/shared/dto/Operation/operation_dto';

export interface OperationApplication {
  getAllOperation(): Promise<Array<AllOperationDto>>;
  getOneOperation(id: any): Promise<OneOperationDto>;
  createOperation(operation: NewOperationDto): Promise<OneOperationDto>;
  updateOperation(
    id: any,
    operation: UpdateOperationDto,
  ): Promise<OneOperationDto>;
  deleteOperation(id: any): any;
}
