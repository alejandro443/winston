import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany
} from 'sequelize-typescript';
import { Client } from './Client.entity';
import { User } from './User.entity';
import { IssuableDocument } from './IssuableDocument.entity';
import { OrderTypes } from '../../infraestructure/shared/enums/OrderTypes';
import { Warehouse } from './Warehouse.entity';
import { PointSale } from './PointSale.entity';
import { v4 as uuidv4 } from 'uuid';
import { SaleDocument } from './SaleDocument.entity';
import { WayToPay } from './WayToPay.entity';
import { SalePaymentSchedule } from './SalePaymentSchedule.entity';
import { DeliveryPoint } from './DeliveryPoint.entity';
import { SaleDetail } from './SaleDetail.entity';

@Table({ tableName: 'sales' })
export class Sale extends Model<Sale> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(),
    allowNull: true,
    unique: true,
  })
  declare crypto_uuid: string;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: false,
  })
  declare client_id: number;

  @BelongsTo(() => Client, 'client_id')
  declare client: Client;

  @ForeignKey(() => User)
  @Column({
    field: 'sold_by',
    allowNull: false,
  })
  declare sold_by: number;

  @BelongsTo(() => User, { foreignKey: 'sold_by', as: 'soldBy' })
  declare soldBy: User;

  @ForeignKey(() => IssuableDocument)
  @Column({
    field: 'issuable_document_id',
    allowNull: true,
  })
  declare issuable_document_id: number;

  @BelongsTo(() => IssuableDocument, 'issuable_document_id')
  declare issuableDocument: IssuableDocument;

  @ForeignKey(() => User)
  @Column({
    field: 'seller_assigned',
    allowNull: false,
  })
  declare seller_assigned: number;

  @BelongsTo(() => User, { foreignKey: 'seller_assigned', as: 'seller' })
  declare seller: User;

  @Column({
    type: DataType.STRING,
  })
  declare type_payment: string;

  @ForeignKey(() => WayToPay)
  @Column({
    field: 'type_payment_id',
    allowNull: true,
  })
  declare type_payment_id: number;

  @BelongsTo(() => WayToPay, 'type_payment_id')
  declare wayToPay: WayToPay;
  
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

  @BelongsTo(() => Warehouse, 'origin_warehouse_id')
  declare warehouse: Warehouse;

  @ForeignKey(() => PointSale)
  @Column({
    field: 'point_sale_id',
    allowNull: true,
  })
  declare point_sale_id: number;

  @BelongsTo(() => PointSale, 'point_sale_id')
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
    type: DataType.FLOAT,
  })
  declare total_sale: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare sub_total_sale: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare sub_discount: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare neto_sale: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare igv: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare taxed: number;

  @Column({
    type: DataType.DATE,
  })
  declare sale_date: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare paid: boolean;

  @ForeignKey(() => DeliveryPoint)
  @Column({
    field: 'delivery_point_id',
    allowNull: true,
  })
  declare delivery_point_id: number;

  @BelongsTo(() => DeliveryPoint, 'delivery_point_id')
  declare deliveryPoint: DeliveryPoint;

  // Relación uno a uno: una venta tiene un documento de venta
  @HasOne(() => SaleDocument)
  saleDocument: SaleDocument;

  @HasOne(() => SalePaymentSchedule)
  salePaymentSchedule: SalePaymentSchedule;

  // Relación uno a muchos: una venta tiene muchos detalles
  @HasMany(() => SaleDetail, { foreignKey: 'sale_id', as: 'saleDetails' })
  saleDetails: SaleDetail[];
  
  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
