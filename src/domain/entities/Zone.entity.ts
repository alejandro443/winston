import { RelatedDistrictsMetaData } from '../../infraestructure/shared/interfaces/RelatedDistrictsMetaData';
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'zones' })
export class Zone extends Model<Zone> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false
  })
  declare delivery_days: string[];

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    allowNull: false
  })
  declare districts: RelatedDistrictsMetaData[];

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
