import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { ClientDeliveryPoint } from './ClientDeliveryPoint.entity';

@Table({ tableName: 'delivery_points' })
export class DeliveryPoint extends Model<DeliveryPoint> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  code: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  direction: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  schedule: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  notification: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @HasMany(() => ClientDeliveryPoint, 'delivery_point_id')
  clientDeliveryPoints: ClientDeliveryPoint[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
