import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PRODUCT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetProductByPriceListRequestDto, GetProductRequestDto } from '../request_dto/ProductDto/get.product_dto';
import { CreateProductRequestDto, CreateProductWithListPriceRequestDto } from '../request_dto/ProductDto/create.product_dto';
import { ProductApplication } from 'src/core/application/Product/ProductApplication';
import {
  ProductsResponse,
  ProductResponse,
  ProductWithListPricesResponse,
  ProductsWithPricesResponse,
} from '../responses/product.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { UpdateProductRequestDto } from '../request_dto/ProductDto/update.product_dto';
import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';

@ApiTags('Product')
@Controller('/product')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ProductController {
  constructor(
    @Inject(PRODUCT_APPLICATION)
    private application: ProductApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllProduct(): Promise<ProductsResponse> {
    Log.info(`(Get) Get all product`);

    const product = await this.application.getAllProduct();
    return {
      status: 201,
      message: `Get all product`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneProduct(
    @Param('id', ParseIntPipe) id: GetProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(Get) Get product id: ${id}`);

    const product = await this.application.getOneProduct(id);
    return {
      status: 201,
      message: `Product ${id} OK`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Post()
  async createProduct(
    @Body() request: CreateProductWithListPriceRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(POST) Create product`);

    const product = await this.application.createProduct(request);
    return {
      status: 201,
      message: `Product ${product.id} created OK`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProductResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateProduct(
    @Param('id', ParseIntPipe) productId: number,
    @Body() request: UpdateProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(PUT) Put product`);

    try {
      const product = await this.application.updateProduct(productId, request);
      return {
        status: 200,
        message: `Product ${productId} updated.`,
        data: product,
      };
    } catch (error) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR');
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteProduct(
    @Param('id', ParseIntPipe) id: GetProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(Delete) Delete product ${id}`);

    const product = await this.application.deleteProduct(id);
    return {
      status: 200,
      message: `Product  ${id} deleted.`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductsWithPricesResponse,
  })
  @HttpCode(201)
  @Get('/list_price')
  async getAllProductByCategoryAndListPrice(
    @Body() request: GetProductByPriceListRequestDto,
  ): Promise<ProductsWithPricesResponse> {
    Log.info(`(Get) Get product id: ${request.list_price_id}`);

    const product = await this.application.getAllProductByCategoryAndListPrice(request.category_id, request.list_price_id);
    return {
      status: 201,
      message: `Ok`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductWithListPricesResponse,
  })
  @HttpCode(201)
  @Get('/one_with_list_prices/:id')
  async getOneProductWithPriceList(
    @Param('id', ParseIntPipe) id: GetProductRequestDto,
  ): Promise<ProductWithListPricesResponse> {
    Log.info(`(Get) Get one_with_list_prices`);

    try {
      const product = await this.application.getOneProductWithPriceList(id);
      return {
        status: 201,
        message: `Ok`,
        data: product,
      };
    } catch (error) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR');
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid product id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProductResponse,
  })
  @HttpCode(200)
  @Put('/update_with_price_list/:id')
  async updateProductWithPriceList(
    @Param('id', ParseIntPipe) productId: number,
    @Body() request: UpdateProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(PUT) Put product`);

    try {
      const product = await this.application.updateProductWithPriceList(productId, request);
      return {
        status: 200,
        message: `Product ${productId} updated.`,
        data: product,
      };
    } catch (error) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR');
    }
  }
}
