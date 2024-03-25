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
import { ClientCompany } from './ClientCompany.entity';

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

  @BelongsTo(() => User, 'id')
  declare user: User;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare person_id: number;

  @BelongsTo(() => Person, 'id')
  declare person: Person;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare client_company_id: number;

  @BelongsTo(() => ClientCompany, 'id')
  declare clientCompany: ClientCompany;

  @ForeignKey(() => Classification)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare classification_id: number;

  @BelongsTo(() => Classification, 'id')
  declare classification: Classification;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare group_id: number;

  @BelongsTo(() => Group, 'id')
  declare group: Group;

  @ForeignKey(() => TypeClient)
  @Column({ field: 'type_client_id' })
  declare type_client_id: number;

  @BelongsTo(() => TypeClient, 'type_client_id')
  declare typeClient: TypeClient;

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
