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
import { BusinessTurn } from './BusinessTurn.entity';

@Table({ tableName: 'business_subcategories' })
export class BusinessSubcategory extends Model<BusinessSubcategory> {
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
    type: DataType.INTEGER,
  })
  declare id_business_turn: number;
  @ForeignKey(() => BusinessTurn)
  @Column({
    field: 'business_turn',
    allowNull: true,
  })
  declare business_turn_id: number | null;

  @BelongsTo(() => BusinessTurn, 'id')
  declare business_turn: BusinessTurn;

  @Column({
    type: DataType.STRING,
  })
  declare name_business_turn: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
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
