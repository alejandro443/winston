import {
  AllPointSaleDto,
  NewPointSaleDto,
  OnePointSaleDto,
  UpdatePointSaleDto,
} from 'src/core/shared/dto/PointSale/point_sale_dto';

export interface PointSaleApplication {
  getAllPointSale(): Promise<Array<AllPointSaleDto>>;
  getOnePointSale(id: number): Promise<OnePointSaleDto>;
  createPointSale(
    data: NewPointSaleDto,
  ): Promise<OnePointSaleDto>;
  updatePointSale(
    id: number,
    data: UpdatePointSaleDto,
  ): Promise<OnePointSaleDto>;
  deletePointSale(id: number): any;
}
