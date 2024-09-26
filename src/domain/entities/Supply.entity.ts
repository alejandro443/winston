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
} from 'sequelize-typescript';
import { SupplyType } from './SupplyType.entity';
import { ProductBrand } from './ProductBrand.entity';
import { ProductCategory } from './ProductCategory.entity';
import { UnitMeasurement } from './UnitMeasurement.entity';

@Table({ tableName: 'supply' })
export class Supply extends Model<Supply> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.TEXT,
    defaultValue: 'https://cdn-icons-png.flaticon.com/512/4994/4994463.png'
  })
  declare image: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare to_sell: boolean;
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare to_buy: boolean;

  @Column({
    type: DataType.INTEGER
  })
  declare alert_days: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @ForeignKey(() => SupplyType)
  @Column({
    field: 'supply_type_id',
    allowNull: true,
  })
  declare supply_type_id: number;

  @BelongsTo(() => SupplyType, 'supply_type_id')
  declare supplyType: SupplyType;

  @ForeignKey(() => ProductBrand)
  @Column({
    field: 'product_brand_id',
    allowNull: true,
  })
  declare product_brand_id: number;

  @BelongsTo(() => ProductBrand, 'product_brand_id')
  declare productBrand: ProductBrand;

  @ForeignKey(() => ProductCategory)
  @Column({
    field: 'product_category_id',
    allowNull: true,
  })
  declare product_category_id: number;

  @BelongsTo(() => ProductCategory, 'product_category_id')
  declare productCategory: ProductCategory;

  @ForeignKey(() => UnitMeasurement)
  @Column({
    field: 'unit_measurement_id',
    allowNull: true,
  })
  declare unit_measurement_id: number;

  @BelongsTo(() => UnitMeasurement, 'unit_measurement_id')
  declare unitMeasurement: UnitMeasurement;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
