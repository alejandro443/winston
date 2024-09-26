import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';


// Esta tabla es solo para las categorias de productos, no es una tabla intermedia entre productos y categorias
@Table({ tableName: 'product_categories' })
export class ProductCategory extends Model<ProductCategory> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare father_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/tags_categories_icon_145927.png'
  })
  declare image: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare is_base: boolean;
 
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_father: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
