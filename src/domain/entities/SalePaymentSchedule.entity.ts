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
import { v4 as uuidv4 } from 'uuid';


@Table({ tableName: 'sales_payment_schedules' })
export class SalePaymentSchedule extends Model<SalePaymentSchedule> {
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

  @ForeignKey(() => Sale)
  @Column({
    field: 'sale_id',
    allowNull: true,
  })
  declare sale_id: number;

  @BelongsTo  (() => Sale, 'sale_id')
  declare sale: Sale;

  @Column({
    type: DataType.DATE,
  })
  declare payment_first_date: Date;

  @Column({
    type: DataType.DATE,
  })
  declare payment_last_date: Date;

  @Column({
    type: DataType.INTEGER,
  })
  declare total_sale: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare number_quotas: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare done: boolean;

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
