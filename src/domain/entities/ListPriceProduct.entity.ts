import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  DeletedAt,
  Scopes
} from 'sequelize-typescript';
import { Product } from './Product.entity';
import { ListPrice } from './ListPrice.entity';

@Table({ tableName: 'list_price_products' })
export class ListPriceProduct extends Model<ListPriceProduct> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Product)
  @Column({
    field: 'product_id',
    allowNull: false
  })
  declare product_id: number;

  @BelongsTo(() => Product, 'product_id')
  declare product: Product;

  @ForeignKey(() => ListPrice)
  @Column({
    field: 'list_price_id',
    allowNull: false
  })
  declare list_price_id: number;

  @BelongsTo(() => ListPrice, 'list_price_id')
  declare listPrice: ListPrice;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare unit_price: number;

  @Column({
    type: DataType.DECIMAL(10, 2)
  })
  declare package_price: number;

  @CreatedAt
  declare created_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
