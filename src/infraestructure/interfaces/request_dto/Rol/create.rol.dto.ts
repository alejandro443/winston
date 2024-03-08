import { ApiProperty } from '@nestjs/swagger';

export class CreateRolRequestDto {
    
    @ApiProperty({
        description: 'Nombre rol'
    })
    name: string;
    
    @ApiProperty({
        description: 'Descripcion rol'
    })
    description: string;

    @ApiProperty({
        description: 'Estado del rol (Activo/Desactivado)',
        default: true,
        type: Boolean
    })
    status: boolean;
}