import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';
import { TypeUnitMeasurement } from '@src/infraestructure/shared/enums/TypeUnitMeasurement';

@Table({ tableName: 'unit_measurements' })
export class UnitMeasurement extends Model<UnitMeasurement> {
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
    allowNull: true,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare abbreviation: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare convertion_factor: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(TypeUnitMeasurement),
    allowNull: false,
  })
  declare type: TypeUnitMeasurement;

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
