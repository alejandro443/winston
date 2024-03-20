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
import { TypeClient } from './TypeClient.entity';
import { Classification } from './Classification.entity';
import { Group } from './Group.entity';
import { Person } from './Person.entity';
import { User } from './User.entity';

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
    allowNull: true,
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
    allowNull: true,
  })
  user_id: number;

  @BelongsTo(() => Person, 'user_id')
  user: User;

  @ForeignKey(() => Person)
  @Column({ 
    field: 'person_identification',
    allowNull: true,
  })
  person_identification: string;

  @BelongsTo(() => Person, 'person_identification')
  person: Person;

  @ForeignKey(() => TypeClient)
  @Column({ 
    field: 'type_client_code',
    allowNull: true,
  })
  type_client_code: string;

  @BelongsTo(() => TypeClient, 'type_client_code')
  typeClient: TypeClient;

  @ForeignKey(() => Classification)
  @Column({ 
    field: 'classification_code',
    allowNull: true,
  })
  classification_code: string;

  @BelongsTo(() => Classification, 'classification_code')
  classification: Classification;

  @ForeignKey(() => Group)
  @Column({ 
    field: 'group_code',
    allowNull: true,
  })
  group_code: string;

  @BelongsTo(() => Group, 'group_code')
  group: Group;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
