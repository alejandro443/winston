import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
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
import { ProductsResponse, ProductResponse } from '../responses/product.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('Product')
@Controller('/product')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class ProductController {
  constructor(
    @Inject(PRODUCT_APPLICATION)
    private application: ProductApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
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

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneProduct(
    @Param() request: GetProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(Get) Get product category code: ${request.id}`);

    const product = await this.application.getOneProduct(request.id);
    return {
      status: 201,
      message: `Product  ${request.id} OK`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
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
      message: `Product  ${request.code} created OK`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProductResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateProduct(
    @Param() params: GetProductRequestDto,
    @Body() request: CreateProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(PUT) Put product`);

    const product = await this.application.updateProduct(params.id, request);
    return {
      status: 200,
      message: `Product  updated.`,
      data: product,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteProduct(
    @Param() params: GetProductRequestDto,
  ): Promise<ProductResponse> {
    Log.info(`(Delete) Delete product category ${params.id}`);

    const product = await this.application.deleteProduct(params.id);
    return {
      status: 200,
      message: `Product  ${params.id} deleted.`,
      data: product,
    };
  }
}
