import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript';

@Table({ tableName: 'settings' })
export class Setting extends Model<Setting> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare option: string;

  @Column({
    type: DataType.STRING,
  })
  declare value: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare type_value: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}
