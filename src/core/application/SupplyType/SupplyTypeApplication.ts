import {
  AllSupplyTypeDto,
  NewSupplyTypeDto,
  OneSupplyTypeDto,
  UpdateSupplyTypeDto,
} from 'src/core/shared/dto/SupplyType/supply_type_dto';

export interface SupplyTypeApplication {
  getAllSupplyType(): Promise<Array<AllSupplyTypeDto>>;
  getOneSupplyType(code: any): Promise<OneSupplyTypeDto>;
  createSupplyType(supply_type: NewSupplyTypeDto): Promise<OneSupplyTypeDto>;
  updateSupplyType(
    code: any,
    supply_type: UpdateSupplyTypeDto,
  ): Promise<OneSupplyTypeDto>;
  deleteSupplyType(code: any): any;
}
