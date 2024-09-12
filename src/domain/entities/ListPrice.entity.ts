import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'list_price' })
export class ListPrice extends Model<ListPrice> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare currency: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare symbol: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  declare increase_percentage: number;
  
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  declare reduce_percentage: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_base: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
