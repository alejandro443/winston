import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  DeletedAt
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
    allowNull: true,
  })
  declare product_id: number;

  @BelongsTo(() => Product, 'id')
  declare product: Product;

  @ForeignKey(() => ListPrice)
  @Column({
    field: 'list_price_id',
    allowNull: true,
  })
  declare list_price_id: number;

  @BelongsTo(() => ListPrice, 'id')
  declare listPrice: ListPrice;

  @Column({
    type: DataType.FLOAT,
  })
  declare unit_price: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare package_price: number;

  @CreatedAt
  declare created_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
