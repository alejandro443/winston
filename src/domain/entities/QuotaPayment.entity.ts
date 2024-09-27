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
import { PaymentSchedule } from './PaymentSchedule.entity';
import { User } from './User.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'quota_payments' })
export class QuotaPayment extends Model<QuotaPayment> {
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
  declare voucher_image: String;

  @Column({
    type: DataType.STRING,
  })
  declare observation: string;

  @ForeignKey(() => PaymentSchedule)
  @Column({
    field: 'payment_schedule_id',
    allowNull: false,
  })
  declare payment_schedule_id: number;

  @BelongsTo(() => PaymentSchedule, 'payment_schedule_id')
  declare paymentSchedule: PaymentSchedule;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    allowNull: false,
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
