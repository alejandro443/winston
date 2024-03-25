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
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare logo: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare sector: string;

  @Column({
    type: DataType.STRING,
  })
  declare ruc: string;

  @Column({
    type: DataType.STRING,
  })
  declare type: string;

  @Column({
    type: DataType.STRING,
  })
  declare year: string;

  @Column({
    type: DataType.STRING,
  })
  declare direction: string;

  @Column({
    type: DataType.STRING,
  })
  declare web_page: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone_one: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone_two: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone_three: string;

  @Column({
    type: DataType.STRING,
  })
  declare representative_legal: string;

  @Column({
    type: DataType.STRING,
  })
  declare representative_email: string;

  @Column({
    type: DataType.STRING,
  })
  declare representative_phone: string;

  @Column({
    type: DataType.STRING,
  })
  declare representative_direction: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare config_online: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare open_cash: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare district: string;

  @Column({
    type: DataType.STRING,
  })
  declare province: string;

  @Column({
    type: DataType.STRING,
  })
  declare department: string;

  @Column({
    type: DataType.STRING,
  })
  declare urbanization: string;

  @Column({
    type: DataType.STRING,
  })
  declare ubigeo: string;

  @Column({
    type: DataType.STRING,
  })
  declare country: string;

  @Column({
    type: DataType.STRING,
  })
  declare comercial_name: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare exonerated: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare instagram: string;

  @Column({
    type: DataType.STRING,
  })
  declare facebook: string;

  @Column({
    type: DataType.STRING,
  })
  declare youtube: string;

  @Column({
    type: DataType.STRING,
  })
  declare whatsapp: string;

  @Column({
    type: DataType.STRING,
  })
  declare tiktok: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare edit_price: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare footer: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare accounts: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare footer_description: string;

  @Column({
    type: DataType.STRING,
  })
  declare edit_documents: string;

  @Column({
    type: DataType.STRING,
  })
  declare license: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare point_sale: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare store_online: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare price_wholesale: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  declare amount_wholesale: number;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
