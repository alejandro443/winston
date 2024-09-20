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
import { SalePaymentSchedule } from './SalePaymentSchedule.entity';

@Table({ tableName: 'payment_schedules' })
export class PaymentSchedule extends Model<PaymentSchedule> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.UUID,
    allowNull: true,
    unique: true,
  })
  declare uuid: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare number_quota: number;

  @Column({
    type: DataType.STRING,
  })
  declare label: string;

  @Column({
    type: DataType.DATE,
  })
  declare deadline: Date;

  @Column({
    type: DataType.DATE,
  })
  declare payment_date: Date;

  // Total del pago de la quota
  @Column({
    type: DataType.FLOAT
  })
  declare payment_amount: number;
  
  // Total de pago acumulado
  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  declare amount: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  declare residue: number;

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

  @ForeignKey(() => SalePaymentSchedule)
  @Column({
    field: 'sale_payment_schedule_id',
    allowNull: true,
  })
  declare sale_payment_schedule_id: number;

  @BelongsTo(() => SalePaymentSchedule, 'sale_payment_schedule_id')
  declare salePaymentSchedule: SalePaymentSchedule;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
