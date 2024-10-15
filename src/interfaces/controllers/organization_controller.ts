import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  NotFoundException,
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
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ORGANIZATION_APPLICATION } from 'src/core/shared/constants/application.constants';
import { LoggerCustomService } from '../../infraestructure/shared/logger_config/logger-custom.service'; // Importar el servicio de logs
import { GetOrganizationRequestDto } from '../request_dto/OrganizationDto/get.organization_dto';
import { CreateOrganizationRequestDto } from '../request_dto/OrganizationDto/create.organization_dto';
import { UpdateOrganizationRequestDto } from '../request_dto/OrganizationDto/update.organization_dto';
import { OrganizationApplication } from 'src/core/application/Organization/OrganizationApplication';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { OrganizationResponse } from '../responses/organization.response';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Organization')
@Controller('/organization')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class OrganizationController {
  constructor(
    @Inject(ORGANIZATION_APPLICATION)
    private application: OrganizationApplication,

    private readonly loggerService: LoggerCustomService, // Inyección del servicio de logs
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtained.',
    type: OrganizationResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllOrganization(): Promise<OrganizationResponse> {
    // Nuevo log usando el servicio de Winston
    this.loggerService.log('(Get) Get all organizations', OrganizationController.name);

    const organizations = await this.application.getAllOrganization();
    return {
      status: 201,
      message: `Get all organizations`,
      data: organizations,
    };
  }
//--------------------------------------------------------------------
  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtained.',
    type: OrganizationResponse,
  })
@HttpCode(200)
@Get('/one/:id')
async getOneOrganization(
  @Param('id', ParseIntPipe) id: number,
): Promise<OrganizationResponse> {
  try {
    // Log de intento de obtener la organización
    this.loggerService.log(`(Get) Get organization id: ${id}`, OrganizationController.name);

    // Obtener la organización por ID
    const organization = await this.application.getOneOrganization(id);

    // Si la organización no existe, lanzar NotFoundException
    if (!organization || Object.keys(organization).length === 0) {
      // Si la organización no existe, lanzar NotFoundException
      this.loggerService.warn(`Organization with ID ${id} not found`, OrganizationController.name);
      throw new NotFoundException(`Organization with ID ${id} not found`);
      }

    // Devolver la organización encontrada
    return {
      status: 200,
      message: `Organization ${id} OK`,
      data: organization,
    };
  } catch (error) {
    // Registrar el error y relanzarlo
    this.loggerService.error(`Error fetching organization with ID ${id}: ${error.message}`, error.stack, OrganizationController.name);
    throw error;
  }
}

//---------------------------------------------------------------------------
  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: OrganizationResponse,
  })
  @HttpCode(201)
  @Post()
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async createOrganization(
    @Body() request: CreateOrganizationRequestDto,
  ): Promise<OrganizationResponse> {
    try {
      // Log de creación de organización
      this.loggerService.log(`(POST) Create organization`, OrganizationController.name);
  
      // Crear la organización
      const organization = await this.application.createOrganization(request);
  
      // Respuesta exitosa
      return {
        status: 201,
        message: `Organization ${request.name} created OK`,
        data: organization,
      };
    } catch (error) {
      // Log de error
      this.loggerService.error(`Error creating organization: ${error.message}`, error.stack, OrganizationController.name);
      throw error;
    }
  }
  
  //-----------------------------------------------------------------
  @HttpCode(200)
  @Put('/update/:id')
  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiNotFoundResponse({ description: 'Organization not found' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: OrganizationResponse,
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async updateOrganization(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: UpdateOrganizationRequestDto,
  ): Promise<OrganizationResponse> {
    try {
      const organization = await this.application.getOneOrganization(id);
      
    if (!organization || Object.keys(organization).length === 0) {
      // Si la organización no existe, lanzar NotFoundException
      this.loggerService.warn(`Organization with ID ${id} not found`, OrganizationController.name);
      throw new NotFoundException(`Organization with ID ${id} not found`);
      }
  
      this.loggerService.log(`(PUT) Update organization ${id}`, OrganizationController.name);
      const updatedOrganization = await this.application.updateOrganization(id, request);
  
      return {
        status: 200,
        message: `Organization ${id} updated.`,
        data: updatedOrganization,
      };
    } catch (error) {
      this.loggerService.error(`Error updating organization with ID ${id}: ${error.message}`, error.stack, OrganizationController.name);
      throw error;
    }
  }
  
//--------------------------------------------------------------------------------------------
  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: OrganizationResponse,
  })
  @HttpCode(200)
@Delete('/delete/:id')
async deleteOrganization(
  @Param('id', ParseIntPipe) id: number, // Asegúrate de que el ID sea un número
): Promise<OrganizationResponse> {
  try {
    // Verificar si la organización existe antes de eliminarla
    const organization = await this.application.getOneOrganization(id);

    if (!organization || Object.keys(organization).length === 0) {
      // Si la organización no existe, lanzar NotFoundException
      this.loggerService.warn(`Organization with ID ${id} not found`, OrganizationController.name);
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }

    // Si existe, proceder con la eliminación
    this.loggerService.log(`(Delete) Delete organization ${id}`, OrganizationController.name);

    await this.application.deleteOrganization(id);

    return {
      status: 200,
      message: `Organization ${id} deleted.`,
      data: organization,
    };
  } catch (error) {
    this.loggerService.error(`Error deleting organization with ID ${id}: ${error.message}`, error.stack);
    throw error;
  }
}


}
