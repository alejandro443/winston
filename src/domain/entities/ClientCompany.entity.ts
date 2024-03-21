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
} from 'sequelize-typescript';

@Table({ tableName: 'clients_companies' })
export class ClientCompany extends Model<ClientCompany> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  main_identification: string;

  @Column({
    type: DataType.STRING,
  })
  type_identification: string;

  @Column({
    type: DataType.STRING,
  })
  name_company: string;
  
  @Column({
    type: DataType.STRING,
  })
  main_phone: string;

  @Column({ 
    type: DataType.STRING, 
    unique: true, 
    validate: { isEmail: true } 
  })
  main_email: string;

  @Column({
    type: DataType.STRING,
  })
  website_url: string;

  @Column({
    type: DataType.STRING,
  })
  main_direction: string;

  @Column({
    type: DataType.STRING,
  })
  type_company: string;
  
  @Column({
    type: DataType.STRING,
  })
  type_industry: string;

  @Column({
    type: DataType.STRING,
  })
  zip_code: string;

  @Column({
    type: DataType.STRING,
  })
  country: string;

  @Column({
    type: DataType.STRING,
  })
  department: string;

  @Column({
    type: DataType.STRING,
  })
  province: string;

  @Column({
    type: DataType.STRING,
  })
  district: string;
  
  @Column({
    type: DataType.DATE,
  })
  foundation_date: Date;

  @Column({ 
    type: DataType.ARRAY(DataType.JSON)
  })
  phones: PhonesMetadata[];
  
  @Column({ 
    type: DataType.ARRAY(DataType.JSON)
  })
  directions: DirectionsMetadata[];
  
  @Column({ 
    type: DataType.ARRAY(DataType.STRING)
  })
  emails: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
