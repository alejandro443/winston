import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Zone } from './Zone.entity';
import { Client } from './Client.entity';
import { User } from './User.entity';

@Table({ tableName: 'zone_details' })
export class ZoneDetail extends Model<ZoneDetail> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Zone)
  @Column({
    field: 'zone_id',
    allowNull: false,
  })
  declare zone_id: number | null;

  @BelongsTo(() => Zone, 'zone_id')
  declare zone: Zone;

  @ForeignKey(() => Client)
  @Column({
    field: 'client_id',
    allowNull: true,
  })
  declare client_id: number | null;

  @BelongsTo(() => Client, 'client_id')
  declare client: Client;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    allowNull: true,
  })
  declare user_id: number | null;

  @BelongsTo(() => User, 'user_id')
  declare user: User;
}
