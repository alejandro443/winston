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
import { ClientDeliveryMethod } from './ClientDeliveryMethod.entity';

@Table({ tableName: 'delivery_methods' })
export class DeliveryMethod extends Model<DeliveryMethod> {
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
  declare description: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare schedule: string[];

  @Column({
    type: DataType.STRING,
  })
  declare shipping_cost: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare availability_countries: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare tracking: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare shipping_insurance: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare international_delivery: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare return_policy: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasMany(() => ClientDeliveryMethod, 'delivery_method_id')
  declare clientDeliveryMethods: ClientDeliveryMethod[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
