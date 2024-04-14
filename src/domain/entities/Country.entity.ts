import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Region } from './Region.entity';

@Table({ tableName: 'country' })
export class Country extends Model<Country> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING(3),
  })
  code_ISO: string;

  @Column({
    type: DataType.STRING,
  })
  currency: string;

  @Column({
    type: DataType.STRING,
  })
  language: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;

  @BelongsTo(() => Region)
  region: Region;

  @Column({
    type: DataType.STRING(3),
  })
  phone_code: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  tax_rate: number;

  @Column({
    type: DataType.STRING,
  })
  timezone: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
