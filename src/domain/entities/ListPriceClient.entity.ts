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
import { ListPrice } from './ListPrice.entity';
import { Client } from './Client.entity';

@Table({ tableName: 'list_price_clients' })
export class ListPriceClient extends Model<ListPriceClient> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: true,
  })
  declare client_id: number;

  @BelongsTo(() => Client, 'id')
  declare client: Client;

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
