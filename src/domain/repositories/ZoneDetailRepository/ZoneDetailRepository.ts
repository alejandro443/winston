import { NewZoneDetailDto } from '@src/core/shared/dto/ZoneDetail/zone_detail_dto';
import { ZoneDetailApplicationError } from '@src/core/shared/error/ZoneDetailApplicationError';
import { Client } from '@src/domain/entities/Client.entity';
import { User } from '@src/domain/entities/User.entity';
import { Zone } from '@src/domain/entities/Zone.entity';
import { ZoneDetail } from 'src/domain/entities/ZoneDetail.entity';

export class ZoneDetailRepository {
  constructor() {}

  async getAllZoneDetails() {
    try {
      var data_zone_detail: any = ZoneDetail.findAll({
        include: [
          {model: Client, required: false},
          {model: User, required: false},
          {model: Zone, required: false}
        ]
      });

      return data_zone_detail;
    } catch (error: any) {
      return error;
    }
  }

  async create(zone: NewZoneDetailDto) {
    try {
      return Zone.create(zone);
    } catch (error: any) {
      return error;
    }
  }
}
