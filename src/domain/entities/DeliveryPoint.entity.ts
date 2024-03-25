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
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare direction: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare schedule: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare notification: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasMany(() => ClientDeliveryPoint, 'delivery_point_id')
  declare clientDeliveryPoints: ClientDeliveryPoint[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
