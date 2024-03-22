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
import { DeliveryMethod } from './DeliveryMethod.entity';

@Table({ tableName: 'client_delivery_methods' })
export class ClientDeliveryMethod extends Model<ClientDeliveryMethod> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: true,
  })
  client_id: number | null;

  @BelongsTo(() => Client, 'id')
  client: Client;

  @ForeignKey(() => DeliveryMethod)
  @Column({
    field: 'delivery_method_id',
  })
  delivery_method_id: number;

  @BelongsTo(() => DeliveryMethod, 'id')
  deliveryMethod: DeliveryMethod;

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
