import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Sale } from './Sale.entity';
import { Product } from './Product.entity';

@Table({ tableName: 'sale_details' })
export class SaleDetail extends Model<SaleDetail> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Sale)
  @Column({
    field: 'sale_id',
    allowNull: false,
  })
  declare sale_id: number;

  @BelongsTo(() => Sale, 'id')
  declare sale: Sale;

  @ForeignKey(() => Product)
  @Column({
    field: 'product_id',
    allowNull: false,
  })
  declare product_id: number;

  @BelongsTo(() => Product, 'id')
  declare product: Product;

  @Column({
    type: DataType.INTEGER,
  })
  declare amount: number;

  @Column({
    type: DataType.STRING,
  })
  declare product_name: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare product_price: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare product_subtotal: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare product_discount: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare product_total: number;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
