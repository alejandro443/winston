import {
  AllZoneDto,
  NewZoneDto,
  OneZoneDto,
  UpdateZoneDto,
} from 'src/core/shared/dto/Zone/zone_dto';

export interface ZoneApplication {
  getAllZone(): Promise<Array<AllZoneDto>>;
  getOneZone(id_zone: number): Promise<OneZoneDto>;
  createZone(
    zone: NewZoneDto,
  ): Promise<OneZoneDto>;
  updateZone(
    id_zone: number,
    zone: UpdateZoneDto,
  ): Promise<OneZoneDto>;
  deleteZone(id_zone: number): any;
}
