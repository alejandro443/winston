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
  HasMany
} from 'sequelize-typescript';
import { CompanyWorker } from './CompanyWorker.entity';

@Table({ tableName: 'companies' })
export class Company extends Model<Company> {
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
  declare condition: string;

  @Column({
    type: DataType.STRING,
  })
  declare type_identification: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare trade_name: string;

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

  @HasMany(() => CompanyWorker, 'company_id')
  declare companyWorker: CompanyWorker[];

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  declare ubigeo: object;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
