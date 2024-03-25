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
  declare id: number;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: true,
  })
  declare client_id: number;

  @BelongsTo(() => Client, 'id')
  declare client: Client;

  @ForeignKey(() => DeliveryPoint)
  @Column({
    field: 'delivery_point_id',
    allowNull: true,
  })
  declare delivery_point_id: number;

  @BelongsTo(() => DeliveryPoint, 'id')
  declare deliveryPoint: DeliveryPoint;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
