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
import { Department } from './Department.entity';

@Table({ tableName: 'province' })
export class Province extends Model<Province> {
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

  @ForeignKey(() => Department)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  department_id: number;

  @BelongsTo(() => Department)
  department: Department;

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
