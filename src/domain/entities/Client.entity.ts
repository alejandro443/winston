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
  HasMany,
} from 'sequelize-typescript';
import { TypeClient } from './TypeClient.entity';
import { Classification } from './Classification.entity';
import { Group } from './Group.entity';
import { Person } from './Person.entity';
import { User } from './User.entity';
import { ClientDeliveryPoint } from './ClientDeliveryPoint.entity';
import { ClientDeliveryMethod } from './ClientDeliveryMethod.entity';
import { Company } from './Company.entity';
import { TypeChannel } from './TypeChannel.entity';

@Table({ tableName: 'clients' })
export class Client extends Model<Client> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare user_id: number;

  @BelongsTo(() => User, 'user_id')
  declare user: User;

  @ForeignKey(() => Person)
  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  entity_id: number;

  @BelongsTo(() => Person, { foreignKey: 'entity_id', constraints: false })
  declare person: Person;

  @BelongsTo(() => Company, { foreignKey: 'entity_id', constraints: false })
  declare company: Company;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare type_entity: string;

  @ForeignKey(() => Classification)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare classification_id: number;

  @BelongsTo(() => Classification, 'classification_id')
  declare classification: Classification;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare group_id: number;

  @BelongsTo(() => Group, 'group_id')
  declare group: Group;

  @ForeignKey(() => TypeClient)
  @Column({
    field: 'type_client_id',
    allowNull: false,
  })
  declare type_client_id: number;

  @BelongsTo(() => TypeClient, 'type_client_id')
  declare typeClient: TypeClient;

  @ForeignKey(() => TypeChannel)
  @Column({
    field: 'type_channel_id',
    allowNull: false,
  })
  declare type_channel_id: number;

  @BelongsTo(() => TypeChannel, 'type_channel_id')
  declare typeChannel: TypeChannel;

  @HasMany(() => ClientDeliveryPoint, 'client_id')
  declare clientDeliveryPoints: ClientDeliveryPoint[];

  @HasMany(() => ClientDeliveryMethod, 'client_id')
  declare clientDeliveryMethods: ClientDeliveryMethod[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
