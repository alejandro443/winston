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
  id: number;

  @Column({
    type: DataType.STRING,
    primaryKey: true
  })
  code: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;
  
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  schedule: string[];
  
  @Column({
    type: DataType.STRING,
  })
  shipping_cost: string;
  
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  availability_countries: string[];
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  tracking: boolean;
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  shipping_insurance: boolean;
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  international_delivery: boolean;
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  return_policy: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @HasMany(() => ClientDeliveryMethod, 'delivery_method_code')
  clientDeliveryMethods: ClientDeliveryMethod[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
