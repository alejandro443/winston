import {
  AllDto,
  NewDto,
  OneDto,
  UpdateDto,
} from 'src/core/shared/dto/ListPrice/list_price_dto';

export interface ListPriceApplication {
  getAllListPrice(): Promise<Array<AllDto>>;
  getOneListPrice(id: number): Promise<OneDto>;
  createListPrice(
    data: NewDto,
  ): Promise<OneDto>;
  updateListPrice(
    id: number,
    data: UpdateDto,
  ): Promise<OneDto>;
  deleteListPrice(id: number): any;
  getListPriceActives(type: String): any;

}
