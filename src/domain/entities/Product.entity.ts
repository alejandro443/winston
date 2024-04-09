import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ProductCategory } from './ProductCategory.entity';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
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
  declare image: string;

  @Column({
    type: DataType.STRING,
  })
  declare sku: string;

  @Column({
    type: DataType.STRING,
  })
  declare upc: string;

  @Column({
    type: DataType.FLOAT,
  })
  declare weight: number;
  
  @Column({
    type: DataType.FLOAT,
  })
  declare height: number;
  
  @Column({
    type: DataType.FLOAT,
  })
  declare depth: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @ForeignKey(() => ProductCategory)
  @Column({
    type: DataType.INTEGER,
  })
  declare product_category_id: number;

  @BelongsTo(() => ProductCategory, 'product_category_id')
  declare productCategory: ProductCategory;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
