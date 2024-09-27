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
import { User } from './User.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'sales_payments' })
export class SalesPayment extends Model<SalesPayment> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(), // Generar UUID al crear el registro
    allowNull: true,
    unique: true,
  })
  declare crypto_uuid: string;

  @Column({
    type: DataType.FLOAT,
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

  @Column({
    type: DataType.STRING,
  })
  declare observation: string;

  @ForeignKey(() => Sale)
  @Column({
    field: 'sale_id',
    allowNull: false,
  })
  declare sale_id: number;

  @BelongsTo(() => Sale, 'sale_id')
  declare sale: Sale;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    allowNull: true,
  })
  declare user_id: number;

  @BelongsTo(() => User, 'user_id')
  declare user: User;

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
