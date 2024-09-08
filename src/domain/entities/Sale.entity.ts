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
import { Client } from './Client.entity';
import { User } from './User.entity';
import { IssuableDocument } from './IssuableDocument.entity';
import { OrderTypes } from '../../infraestructure/shared/enums/OrderTypes';
import { Warehouse } from './Warehouse.entity';
import { PointSale } from './PointSale.entity';

@Table({ tableName: 'sales' })
export class Sale extends Model<Sale> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: false,
  })
  declare client_id: number;

  @BelongsTo(() => Client, 'id')
  declare client: Client;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    allowNull: false,
  })
  declare user_id: number;

  @BelongsTo(() => User, 'id')
  declare user: User;

  @ForeignKey(() => IssuableDocument)
  @Column({
    field: 'issuable_document_id',
    allowNull: true,
  })
  declare issuable_document_id: number;

  @BelongsTo(() => IssuableDocument, 'id')
  declare issuableDocument: IssuableDocument;

  @Column({
    type: DataType.STRING,
  })
  declare type_payment: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare currency: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare currency_symbol: string;

  @ForeignKey(() => Warehouse)
  @Column({
    field: 'origin_warehouse_id',
    allowNull: true,
  })
  declare origin_warehouse_id: number;

  @BelongsTo(() => Warehouse, 'id')
  declare warehouse: Warehouse;

  @ForeignKey(() => PointSale)
  @Column({
    field: 'point_sale_id',
    allowNull: true,
  })
  declare point_sale_id: number;

  @BelongsTo(() => PointSale, 'id')
  declare pointSale: PointSale;

  @Column({
    type: DataType.STRING,
  })
  declare note: string;

  @Column({
    type: DataType.ENUM(...Object.values(OrderTypes)),
    allowNull: false,
    defaultValue: OrderTypes.SALE,
  })
  declare order_type: OrderTypes;
  
  @Column({
    type: DataType.INTEGER,
  })
  declare total_products: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare total_sale: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare sub_total_sale: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare sub_discount: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare neto_sale: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare igv: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare taxed: number;

  @Column({
    type: DataType.DATE,
  })
  declare sale_date: Date;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
