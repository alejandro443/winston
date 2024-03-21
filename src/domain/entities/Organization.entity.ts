import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'organization' })
export class Organization extends Model<Organization> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  logo: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  sector: string;

  @Column({
    type: DataType.STRING,
  })
  ruc: string;

  @Column({
    type: DataType.STRING,
  })
  type: string;

  @Column({
    type: DataType.STRING,
  })
  year: string;

  @Column({
    type: DataType.STRING,
  })
  direction: string;

  @Column({
    type: DataType.STRING,
  })
  web_page: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  phone_one: string;

  @Column({
    type: DataType.STRING,
  })
  phone_two: string;

  @Column({
    type: DataType.STRING,
  })
  phone_three: string;

  @Column({
    type: DataType.STRING,
  })
  representative_legal: string;

  @Column({
    type: DataType.STRING,
  })
  representative_email: string;

  @Column({
    type: DataType.STRING,
  })
  representative_phone: string;

  @Column({
    type: DataType.STRING,
  })
  representative_direction: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  config_online: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  open_cash: boolean;

  @Column({
    type: DataType.STRING,
  })
  district: string;

  @Column({
    type: DataType.STRING,
  })
  province: string;

  @Column({
    type: DataType.STRING,
  })
  department: string;

  @Column({
    type: DataType.STRING,
  })
  urbanization: string;

  @Column({
    type: DataType.STRING,
  })
  ubigeo: string;

  @Column({
    type: DataType.STRING,
  })
  country: string;

  @Column({
    type: DataType.STRING,
  })
  comercial_name: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  exonerated: boolean;

  @Column({
    type: DataType.STRING,
  })
  instagram: string;

  @Column({
    type: DataType.STRING,
  })
  facebook: string;

  @Column({
    type: DataType.STRING,
  })
  youtube: string;

  @Column({
    type: DataType.STRING,
  })
  whatsapp: string;

  @Column({
    type: DataType.STRING,
  })
  tiktok: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  edit_price: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  footer: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  accounts: boolean;

  @Column({
    type: DataType.STRING,
  })
  footer_description: string;

  @Column({
    type: DataType.STRING,
  })
  edit_documents: string;

  @Column({
    type: DataType.STRING,
  })
  license: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  point_sale: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  store_online: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  price_wholesale: boolean;
  
  @Column({
    type: DataType.INTEGER,
  })
  amount_wholesale:number;


  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
