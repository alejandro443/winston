import { DirectionsMetadata } from '@src/infraestructure/shared/interfaces/DirectionsMetadata';
import { PhonesMetadata } from '@src/infraestructure/shared/interfaces/PhonesMetadata';
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { ClientCompanyWorker } from './ClientCompanyWorker.entity';

@Table({ tableName: 'clients_companies' })
export class ClientCompany extends Model<ClientCompany> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare main_identification: string;

  @Column({
    type: DataType.STRING,
  })
  declare type_identification: string;

  @Column({
    type: DataType.STRING,
  })
  declare name_company: string;

  @Column({
    type: DataType.STRING,
  })
  declare main_phone: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    validate: { isEmail: true },
  })
  declare main_email: string;

  @Column({
    type: DataType.STRING,
  })
  declare website_url: string;

  @Column({
    type: DataType.STRING,
  })
  declare main_direction: string;

  @Column({
    type: DataType.STRING,
  })
  declare type_company: string;

  @Column({
    type: DataType.STRING,
  })
  declare type_industry: string;

  @Column({
    type: DataType.STRING,
  })
  declare zip_code: string;

  @Column({
    type: DataType.STRING,
  })
  declare country: string;

  @Column({
    type: DataType.STRING,
  })
  declare department: string;

  @Column({
    type: DataType.STRING,
  })
  declare province: string;

  @Column({
    type: DataType.STRING,
  })
  declare district: string;

  @Column({
    type: DataType.DATE,
  })
  declare foundation_date: Date;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  declare phones: PhonesMetadata[];

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  declare directions: DirectionsMetadata[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare emails: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasMany(() => ClientCompanyWorker, 'client_company_id')
  declare clientCompanyWorker: ClientCompanyWorker[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
