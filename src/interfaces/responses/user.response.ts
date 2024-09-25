import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { UserDto } from '@src/core/shared/dto/User/user_dto';
import { IsNumber, IsString } from 'class-validator';

class UserResponseDto implements Omit<UserDto, 'password'> {}
class UserWithPersonResponseDto {
  @ApiProperty({
    description: 'UUID del Usuario.',
    type: String,
  })
  @IsString()
  user_uuid?: string;

  @ApiProperty({
    description: 'Usuario.',
    type: String,
  })
  @IsString()
  user?: string;

  @ApiProperty({
    description: 'Nombre de la persona creada para el usuario.',
    type: String,
  })
  @IsString()
  person?: string;
  
  @ApiProperty({
    description: 'UUID de la persona asignada al usuario.',
    type: String,
  })
  @IsString()
  person_uuid?: string;
}

export class UserResponse extends AppResponse {
  @ApiProperty({
    type: UserResponseDto,
    nullable: true,
  })
  data?: object;
}

export class UserWithPersonResponse extends AppResponse {
  @ApiProperty({
    type: UserWithPersonResponseDto,
    nullable: true,
  })
  data?: UserWithPersonResponseDto;
}

export class UsersResponse extends AppResponse {
  @ApiProperty({
    type: [UserResponseDto],
    nullable: true,
  })
  data?: UserDto[];
}



// Sellers
class SellersResponseDto {
  @ApiProperty({
    description: 'Id del usuario.',
    type: Number,
  })
  id?: number;

  @ApiProperty({
    description: 'Usuario.',
    type: String,
  })
  user?: string;
}

export class SellersResponse extends AppResponse {
  @ApiProperty({
    type: [SellersResponseDto],
    nullable: true,
  })
  data?: SellersResponseDto[];
}



// Workers
class UserWorkersResponseDto {
  @ApiProperty({
    description: 'Id del trabajador.',
    type: Number,
  })
  id?: number;

  @ApiProperty({
    description: 'Usuario.',
    type: String,
  })
  user?: string;
  
  @ApiProperty({
    description: 'Nombre del usuario.',
    type: String,
  })
  name?: string;
  
  @ApiProperty({
    description: 'Apellidos del usuario.',
    type: String,
  })
  last_name?: string;
  
  @ApiProperty({
    description: 'Email del usuario.',
    type: String,
  })
  main_email?: string;
  
  @ApiProperty({
    description: 'Rol del usuario.',
    type: String,
  })
  rol_name?: string;
  
  @ApiProperty({
    description: 'Estado del usuario.',
    type: Boolean,
  })
  status?: boolean;
  
  @ApiProperty({
    description: 'Fecha de creacion del usuario.',
    type: Date,
  })
  created_at?: Date;
  
  @ApiProperty({
    description: 'Fecha de creacion del usuario.',
    type: Date,
  })
  updated_at?: Date;
}
export class UserWorkersResponse extends AppResponse {
  @ApiProperty({
    type: [UserWorkersResponseDto],
    nullable: true,
  })
  data?: UserWorkersResponseDto[];
}