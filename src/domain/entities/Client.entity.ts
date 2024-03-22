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
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  user_id: number;

  @BelongsTo(() => User, 'id')
  user: User;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  person_id: number;

  @BelongsTo(() => Person, 'id')
  person: Person;

  @Column({ 
    type: DataType.INTEGER,
    allowNull: true
  })
  client_company_id: number;

  @BelongsTo(() => ClientCompany, 'id')
  clientCompany: ClientCompany;

  @ForeignKey(() => Classification)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  classification_id: number;

  @BelongsTo(() => Classification, 'id')
  classification: Classification;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  group_id: number;

  @BelongsTo(() => Group, 'id')
  group: Group;

  @ForeignKey(() => TypeClient)
  @Column({ field: 'type_client_id' })
  type_client_id: number;

  @BelongsTo(() => TypeClient, 'type_client_id')
  typeClient: TypeClient;

  @HasMany(() => ClientDeliveryPoint, 'client_id')
  clientDeliveryPoints: ClientDeliveryPoint[];

  @HasMany(() => ClientDeliveryMethod, 'client_id')
  clientDeliveryMethods: ClientDeliveryMethod[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
