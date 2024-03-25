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
  declare id: number;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: true,
  })
  declare client_id: number | null;

  @BelongsTo(() => Client, 'id')
  declare client: Client;

  @ForeignKey(() => DeliveryMethod)
  @Column({
    field: 'delivery_method_id',
  })
  declare delivery_method_id: number;

  @BelongsTo(() => DeliveryMethod, 'id')
  declare deliveryMethod: DeliveryMethod;

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
