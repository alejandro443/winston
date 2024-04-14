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
import { Province } from './Province.entity';

@Table({ tableName: 'district' })
export class District extends Model<District> {
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
    type: DataType.STRING,
  })
  cod_ubigeo: string;

  @ForeignKey(() => Province)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  province_id: number;

  @BelongsTo(() => Province)
  province: Province;

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
