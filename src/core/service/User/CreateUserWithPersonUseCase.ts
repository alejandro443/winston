import { UserService } from 'src/domain/services/UserService/UserService';
import { NewUserDto, NewUserWithPersonDto } from 'src/core/shared/dto/User/user_dto';
import { UserRolService } from '@src/domain/services/UserRolService/UserRolService';
import { PersonService } from '@src/domain/services/PersonService/PersonService';
import { WorkerService } from '@src/domain/services/WorkerService/WorkerService';

export class CreateUserWithRolUseCase {
  constructor(
    private userService?: UserService,
    private userRolService?: UserRolService,
    private personService?: PersonService,
    private workerService?: WorkerService
  ) {
    this.userService = new UserService();
    this.userRolService = new UserRolService();
    this.personService = new PersonService();
    this.workerService = new WorkerService();
  }

  async createUserWithPassword(user: NewUserWithPersonDto) {
    try {
      // The user is created
      const user_data: any = await this.userService?.createUser(user);

      if (user.assigned_roles.length > 0) {
        // The role is assigned to the user
        await Promise.all(
          user.assigned_roles.map((role_id: number) => 
            this.userRolService?.createUserRol({ user_id: user_data.id, rol_id: role_id })
          )
        );
      }

      // The person is created
      const person_data: any = await this.personService.createPerson(user.person);

      // The workerd is created
      await this.workerService.createWorker({
        person_id: person_data.id,
        person_identification: user.person.main_identification,
        user_id: user_data.id,
        type_worker_id: user.type_worker_id
      })

      return {
        user_uuid: user_data.crypto_uuid,
        user: user_data.user,
        person: user.person.main_identification,
        person_uuid: person_data.crypto_uuid
      };
    } catch (error: any) {
      return error;
    }
  }
}
