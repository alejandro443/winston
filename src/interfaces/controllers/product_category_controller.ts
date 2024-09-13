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
import { PRODUCT_CATEGORY_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetProductCategoryRequestDto, SearchRequestDto } from '../request_dto/ProductCategoryDto/get.product_category_dto';
import { CreateProductCategoryRequestDto } from '../request_dto/ProductCategoryDto/create.product_category_dto';
import { ProductCategoryApplication } from 'src/core/application/ProductCategory/ProductCategoryApplication';
import {
  ProductCategoriesResponse,
  ProductCategoryResponse,
} from '../responses/product_category.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('ProductCategory')
@Controller('/product_category')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ProductCategoryController {
  constructor(
    @Inject(PRODUCT_CATEGORY_APPLICATION)
    private application: ProductCategoryApplication,
  ) {}
  
  @ApiBadRequestResponse({ description: 'Invalid product category.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductCategoryResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllProductCategory(): Promise<ProductCategoriesResponse> {
    Log.info(`(Get) Get all product categories`);

    const product_categories = await this.application.getAllProductCategory();
    return {
      status: 201,
      message: `Get all product categories`,
      data: product_categories,
    };
  }
  
  @ApiBadRequestResponse({ description: 'Invalid product category.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductCategoryResponse,
  })
  @HttpCode(201)
  @Get('/fathers')
  async getFathersProductCategory(): Promise<ProductCategoriesResponse> {
    Log.info(`(Get) Get all father product categories`);

    const product_categories = await this.application.getAllProductCategory();
    return {
      status: 201,
      message: `Get all father product categories`,
      data: product_categories,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductCategoryResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneProductCategory(
    @Param('id', ParseIntPipe) id: GetProductCategoryRequestDto,
  ): Promise<ProductCategoryResponse> {
    Log.info(`(Get) Get product category id: ${id}`);

    const product_category = await this.application.getOneProductCategory(
      id,
    );
    return {
      status: 201,
      message: `Product Category ${id} OK`,
      data: product_category,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ProductCategoryResponse,
  })
  @HttpCode(201)
  @Post()
  async createProductCategory(
    @Body() request: CreateProductCategoryRequestDto,
  ): Promise<ProductCategoryResponse> {
    Log.info(`(POST) Create product_category`);

    const product_category =
      await this.application.createProductCategory(request);
    return {
      status: 201,
      message: `Product Category ${request.name} created OK`,
      data: product_category,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product_category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProductCategoryResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateProductCategory(
    @Param('id', ParseIntPipe) id: GetProductCategoryRequestDto,
    @Body() request: CreateProductCategoryRequestDto,
  ): Promise<ProductCategoryResponse> {
    Log.info(`(PUT) Put product_category`);

    const product_category = await this.application.updateProductCategory(
      id,
      request,
    );
    return {
      status: 200,
      message: `Product Category updated.`,
      data: product_category,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductCategoryResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteProductCategory(
    @Param('id', ParseIntPipe) id: GetProductCategoryRequestDto,
  ): Promise<ProductCategoryResponse> {
    Log.info(`(Delete) Delete product category ${id}`);

    const product_category = await this.application.deleteProductCategory(
      id,
    );
    return {
      status: 200,
      message: `Product Category ${id} deleted.`,
      data: product_category,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid product category code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ProductCategoryResponse,
  })
  @HttpCode(201)
  @Get('/search/:searchTerm')
  async searchProductCategory(
    @Param('searchTerm') request: SearchRequestDto,
  ): Promise<ProductCategoriesResponse> {
    Log.info(`(Get) search category ${request}`);

    const product_category = await this.application.searchProductCategory(`${request}`);
    return {
      status: 200,
      message: `Ok`,
      data: product_category,
    };
  }
}
