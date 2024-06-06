import {
  AllWayToPayDto,
  NewWayToPayDto,
  OneWayToPayDto,
  UpdateWayToPayDto,
} from 'src/core/shared/dto/WayToPay/way_to_pay_dto';

export interface WayToPayApplication {
  getAllWayToPay(): Promise<Array<AllWayToPayDto>>;
  getOneWayToPay(code: any): Promise<OneWayToPayDto>;
  createWayToPay(way_to_pay: NewWayToPayDto): Promise<OneWayToPayDto>;
  updateWayToPay(
    code: any,
    way_to_pay: UpdateWayToPayDto,
  ): Promise<OneWayToPayDto>;
  deleteWayToPay(code: any): any;
}
