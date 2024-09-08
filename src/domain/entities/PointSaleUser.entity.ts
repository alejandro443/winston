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
import { User } from './User.entity';
import { PointSale } from './PointSale.entity';

@Table({ tableName: 'point_sale_users' })
export class PointSaleUser extends Model<PointSaleUser> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    allowNull: false,
  })
  declare user_id: number;

  @BelongsTo(() => User, 'id')
  declare user: User;
  
  @ForeignKey(() => PointSale)
  @Column({
    field: 'point_sale_id',
    allowNull: false,
  })
  declare point_sale_id: number;

  @BelongsTo(() => PointSale, 'id')
  declare pointSale: PointSale;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;
}
