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
    unique: true,
    primaryKey: true,
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @ForeignKey(() => User)
  @Column({ 
    field: 'user_id',
    allowNull: true
  })
  user_id: number;

  @BelongsTo(() => Person, 'user_id')
  user: User;

  @ForeignKey(() => Person)
  @Column({ 
    field: 'person_identification',
    allowNull: true
  })
  person_identification: string | null;

  @BelongsTo(() => Person, 'person_identification')
  person: Person;

  @ForeignKey(() => ClientCompany)
  @Column({ 
    field: 'client_company_main_identification',
    allowNull: true
  })
  client_company_main_identification: string | null;

  @BelongsTo(() => ClientCompany, 'client_company_main_identification')
  company: ClientCompany;

  @ForeignKey(() => TypeClient)
  @Column({ field: 'type_client_code' })
  type_client_code: string;

  @BelongsTo(() => TypeClient, 'type_client_code')
  typeClient: TypeClient;

  @ForeignKey(() => Classification)
  @Column({ field: 'classification_code' })
  classification_code: string;

  @BelongsTo(() => Classification, 'classification_code')
  classification: Classification;

  @ForeignKey(() => Group)
  @Column({ field: 'group_code' })
  group_code: string;

  @BelongsTo(() => Group, 'group_code')
  group: Group;

  @HasMany(() => ClientDeliveryPoint, 'client_code')
  clientDeliveryPoints: ClientDeliveryPoint[];

  @HasMany(() => ClientDeliveryMethod, 'client_code')
  clientDeliveryMethods: ClientDeliveryMethod[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
