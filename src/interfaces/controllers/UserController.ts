// user.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LoggerCustomService } from '@src/infraestructure/shared/logger_config/logger-custom.service';


@Controller('userrs')
export class uUserController {
  constructor(private readonly loggerService: LoggerCustomService) {}

  private users = [];

  @Post()
  createUser(@Body() createUserDto: any) {
    this.loggerService.debug('Entrando al método createUser', uUserController.name);

    try {
      this.loggerService.verbose('Validando datos de entrada', uUserController.name);

      // Validación simple
      if (!createUserDto.name || !createUserDto.email) {
        this.loggerService.warn('Datos de usuario incompletos', uUserController.name);
        throw new Error('El nombre y el correo electrónico son obligatorios');
      }

      const newUser = {
        id: this.users.length + 1,
        ...createUserDto,
      };
      this.users.push(newUser);

      this.loggerService.log(`Usuario creado con ID ${newUser.id}`, uUserController.name);
      return newUser;
    } catch (error) {
      this.loggerService.error('Error al crear el usuario', error, uUserController.name);
      throw error;
    }
  }

  @Get()
  getAllUsers() {
    this.loggerService.log('Obteniendo todos los usuarios', uUserController.name);
    return this.users;
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    this.loggerService.debug(`Buscando usuario con ID ${id}`, uUserController.name);

    const user = this.users.find(u => u.id === Number(id));
    if (!user) {
      this.loggerService.warn(`Usuario con ID ${id} no encontrado`, uUserController.name);
      throw new Error(`Usuario con ID ${id} no existe`);
    }

    this.loggerService.log(`Usuario con ID ${id} encontrado`, uUserController.name);
    return user;
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: any) {
    this.loggerService.debug(`Actualizando usuario con ID ${id}`, uUserController.name);

    const index = this.users.findIndex(u => u.id === Number(id));
    if (index === -1) {
      this.loggerService.warn(`Usuario con ID ${id} no encontrado para actualizar`, uUserController.name);
      throw new Error(`Usuario con ID ${id} no existe`);
    }

    this.users[index] = { ...this.users[index], ...updateUserDto };
    this.loggerService.log(`Usuario con ID ${id} actualizado`, uUserController.name);
    return this.users[index];
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.loggerService.debug(`Eliminando usuario con ID ${id}`, uUserController.name);

    const index = this.users.findIndex(u => u.id === Number(id));
    if (index === -1) {
      this.loggerService.warn(`Usuario con ID ${id} no encontrado para eliminar`, uUserController.name);
      throw new Error(`Usuario con ID ${id} no existe`);
    }

    const deletedUser = this.users.splice(index, 1);
    this.loggerService.log(`Usuario con ID ${id} eliminado`, uUserController.name);
    return deletedUser;
  }
}
