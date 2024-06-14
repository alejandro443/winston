import {
  AllSupplyDto,
  NewSupplyDto,
  OneSupplyDto,
  UpdateSupplyDto,
} from 'src/core/shared/dto/Supply/supply_dto';

export interface SupplyApplication {
  getAllSupply(): Promise<Array<AllSupplyDto>>;
  getOneSupply(code: any): Promise<OneSupplyDto>;
  createSupply(supply_type: NewSupplyDto): Promise<OneSupplyDto>;
  updateSupply(
    code: any,
    supply_type: UpdateSupplyDto,
  ): Promise<OneSupplyDto>;
  deleteSupply(code: any): any;
}
