import {
  AllSupplyTypeDto,
  NewSupplyTypeDto,
  OneSupplyTypeDto,
  UpdateSupplyTypeDto,
} from 'src/core/shared/dto/SupplyType/supply_type_dto';

export interface SupplyTypeApplication {
  getAllSupplyType(): Promise<Array<AllSupplyTypeDto>>;
  getOneSupplyType(id: number): Promise<OneSupplyTypeDto>;
  createSupplyType(supply_type: NewSupplyTypeDto): Promise<OneSupplyTypeDto>;
  updateSupplyType(
    id: number,
    supply_type: UpdateSupplyTypeDto,
  ): Promise<OneSupplyTypeDto>;
  deleteSupplyType(id: number): any;
}
