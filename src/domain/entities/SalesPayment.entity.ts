import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Sale } from './Sale.entity';

@Table({ tableName: 'sales_payments' })
export class SalesPayment extends Model<SalesPayment> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare amount: number;

  @Column({
    type: DataType.STRING,
  })
  declare method_payment: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare operation_number: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare bank_name: string;

  @Column({
    type: DataType.DATE,
  })
  declare payment_date: Date;

  @ForeignKey(() => Sale)
  @Column({
    field: 'sale_id',
    allowNull: false,
  })
  declare sale_id: number;

  @BelongsTo(() => Sale, 'sale_id')
  declare sale: Sale;

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
