import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Client } from './Client.entity';
import { DeliveryPoint } from './DeliveryPoint.entity';

@Table({ tableName: 'client_delivery_points' })
export class ClientDeliveryPoint extends Model<ClientDeliveryPoint> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Client)
  @Column({ 
    field: 'client_code',
    allowNull: true
  })
  client_code: string | null;

  @ForeignKey(() => DeliveryPoint)
  @Column({ 
    field: 'delivery_point_code'
  })
  delivery_point_code: string;

  @BelongsTo(() => DeliveryPoint, 'delivery_point_code')
  deliveryPoint: DeliveryPoint;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
