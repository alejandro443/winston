import { NewZoneDetailDto } from '@src/core/shared/dto/ZoneDetail/zone_detail_dto';
import { sequelize } from '@src/infraestructure/database/connection.database';
import { ZoneDetail } from 'src/domain/entities/ZoneDetail.entity';

export class ZoneDetailRepository {
  constructor() {}

  async getAllZoneDetails() {
    try {
      const query = `
        SELECT
          "ZoneDetail"."zone_id",
          "Zone"."name",
          "Zone"."delivery_days",
          "Zone"."districts",
          "Zone"."reference",
          "Zone"."status",
          "Zone"."created_at",
          COUNT("ZoneDetail"."client_id") AS "clientCount",
          COUNT("ZoneDetail"."user_id") AS "userCount",
          STRING_AGG("User"."user", ', ') AS "userNames"
        FROM
          "zone_details" AS "ZoneDetail"
        LEFT JOIN
          "clients" AS "Client" ON "ZoneDetail"."client_id" = "Client"."id"
        LEFT JOIN
          "users" AS "User" ON "ZoneDetail"."user_id" = "User"."id"
        LEFT JOIN
          "zones" AS "Zone" ON "ZoneDetail"."zone_id" = "Zone"."id"
        GROUP BY
          "ZoneDetail"."zone_id",
          "Zone"."name",
          "Zone"."delivery_days",
          "Zone"."districts",
          "Zone"."created_at",
          "Zone"."reference",
          "Zone"."status";
      `;

      const [results, metadata] = await sequelize.query(query);

      return results;
    } catch (error: any) {
      return error;
    }
  }

  async create(zone: NewZoneDetailDto) {
    try {
      return ZoneDetail.create(zone);
    } catch (error: any) {
      return error;
    }
  }
}
