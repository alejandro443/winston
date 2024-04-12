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
import { PRODUCT_BRAND_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetProductBrandRequestDto } from '../request_dto/ProductBrandDto/get.product_brand_dto';
import { CreateProductBrandRequestDto } from '../request_dto/ProductBrandDto/create.product_brand_dto';
import { ProductBrandApplication } from 'src/core/application/ProductBrand/ProductBrandApplication';
import {
  ProductCategoriesResponse,
  ProductBrandResponse,
} from '../responses/product_brand.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('ProductBrand')
@Controller('/product_brand')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class ProductBrandController {
  constructor(
    @Inject(PRODUCT_BRAND_APPLICATION)
    private application: ProductBrandApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid product brand code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductBrandResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllProductBrand(): Promise<ProductCategoriesResponse> {
    Log.info(`(Get) Get all product categories`);

    const product_categories = await this.application.getAllProductBrand();
    return {
      status: 201,
      message: `Get all product categories`,
      data: product_categories,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product brand code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductBrandResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneProductBrand(
    @Param() request: GetProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(Get) Get product brand code: ${request.id}`);

    const product_brand = await this.application.getOneProductBrand(request.id);
    return {
      status: 201,
      message: `Product Brand ${request.id} OK`,
      data: product_brand,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product brand code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ProductBrandResponse,
  })
  @HttpCode(201)
  @Post()
  async createProductBrand(
    @Body() request: CreateProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(POST) Create product_brand`);

    const product_brand = await this.application.createProductBrand(request);
    return {
      status: 201,
      message: `Product Brand ${request.id} created OK`,
      data: product_brand,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product_brand code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProductBrandResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateProductBrand(
    @Param() params: GetProductBrandRequestDto,
    @Body() request: CreateProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(PUT) Put product_brand`);

    const product_brand = await this.application.updateProductBrand(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Product Brand updated.`,
      data: product_brand,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product brand code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductBrandResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteProductBrand(
    @Param() params: GetProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(Delete) Delete product brand ${params.id}`);

    const product_brand = await this.application.deleteProductBrand(params.id);
    return {
      status: 200,
      message: `Product Brand ${params.id} deleted.`,
      data: product_brand,
    };
  }
}
