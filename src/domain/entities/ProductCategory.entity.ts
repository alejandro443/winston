import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'product_categories' })
export class ProductCategory extends Model<ProductCategory> {
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
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
  })
  declare image: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  declare is_base: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
