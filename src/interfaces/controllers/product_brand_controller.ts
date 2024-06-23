import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseIntPipe,
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
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('ProductBrand')
@Controller('/product_brand')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ProductBrandController {
  constructor(
    @Inject(PRODUCT_BRAND_APPLICATION)
    private application: ProductBrandApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid product brand id' })
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

  @ApiBadRequestResponse({ description: 'Invalid product brand id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductBrandResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneProductBrand(
    @Param('id', ParseIntPipe) id: GetProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(Get) Get product brand id: ${id}`);

    const product_brand = await this.application.getOneProductBrand(id);
    return {
      status: 201,
      message: `Product Brand ${id} OK`,
      data: product_brand,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product brand id' })
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
      message: `Product Brand ${request.name} created OK`,
      data: product_brand,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product_brand id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProductBrandResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateProductBrand(
    @Param('id', ParseIntPipe) id: GetProductBrandRequestDto,
    @Body() request: CreateProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(PUT) Put product_brand`);

    const product_brand = await this.application.updateProductBrand(
      id,
      request,
    );
    return {
      status: 200,
      message: `Product Brand updated.`,
      data: product_brand,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product brand id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductBrandResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteProductBrand(
    @Param('id', ParseIntPipe) id: GetProductBrandRequestDto,
  ): Promise<ProductBrandResponse> {
    Log.info(`(Delete) Delete product brand ${id}`);

    const product_brand = await this.application.deleteProductBrand(id);
    return {
      status: 200,
      message: `Product Brand ${id} deleted.`,
      data: product_brand,
    };
  }
}
