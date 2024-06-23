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
import { GetProductRequestDto } from '../request_dto/ProductDto/get.product_dto';
import { CreateProductRequestDto } from '../request_dto/ProductDto/create.product_dto';
import { ProductApplication } from 'src/core/application/Product/ProductApplication';
import {
  ProductsResponse,
  ProductResponse,
} from '../responses/product.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { UpdateProductRequestDto } from '../request_dto/ProductDto/update.product_dto';

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

  @ApiBadRequestResponse({ description: 'Invalid product category id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllProduct(): Promise<ProductsResponse> {
    Log.info(`(Get) Get all product categories`);

    const product_categories = await this.application.getAllProduct();
    return {
      status: 201,
      message: `Get all product categories`,
      data: product_categories,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneProduct(
    @Param('id', ParseIntPipe) id: GetProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(Get) Get product category id: ${id}`);

    const product = await this.application.getOneProduct(id);
    return {
      status: 201,
      message: `Product ${id} OK`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Post()
  async createProduct(
    @Body() request: CreateProductRequestDto,
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
    @Param('id', ParseIntPipe) id: UpdateProductRequestDto,
    @Body() request: any,
  ): Promise<ProductResponse> {
    Log.info(`(PUT) Put product`);

    const product = await this.application.updateProduct(id, request);
    return {
      status: 200,
      message: `Product ${id} updated.`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteProduct(
    @Param('id', ParseIntPipe) id: GetProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(Delete) Delete product category ${id}`);

    const product = await this.application.deleteProduct(id);
    return {
      status: 200,
      message: `Product  ${id} deleted.`,
      data: product,
    };
  }
}
