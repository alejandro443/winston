import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Fhyona')
@Controller('/fhyona')
export class RootController {

  @Get('/')
  @ApiResponse({ description: 'App root endpoint response'})
  root() {
    return {
      app: 'Fhyona - Sistema de ventas',
      developer: 'CUDESI SAC',
      version: '2.0.0',
      dataUpdate: '06/03/2024'
    }
  }
}
