import { ApiProperty } from '@nestjs/swagger';

export class GetTypeWorkerRequestDto {

    @ApiProperty({
        description: 'Codigo del tipo de trabajo',
        type: String
    })
    code: string;
}