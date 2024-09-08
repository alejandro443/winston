import {
  AllPointSaleUserDto,
  NewPointSaleUserDto,
  OnePointSaleUserDto,
  UpdatePointSaleUserDto,
} from 'src/core/shared/dto/PointSaleUser/point_sale_user_dto';

export interface PointSaleUserApplication {
  ServiceGetAll(): Promise<Array<AllPointSaleUserDto>>;
  ServiceGetOne(id: number): Promise<OnePointSaleUserDto>;
  ServiceCreate(
    data: NewPointSaleUserDto,
  ): Promise<OnePointSaleUserDto>;
  ServiceUpdate(
    id: number,
    data: UpdatePointSaleUserDto,
  ): Promise<OnePointSaleUserDto>;
  ServiceDelete(id: number): any;
}
