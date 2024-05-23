import { PersonService } from 'src/domain/services/PersonService/PersonService';
import { NewPersonDto } from 'src/core/shared/dto/Person/person_dto';
import { PersonApplicationError } from '@src/core/shared/error/PersonApplicationError';
import { UserService } from '@src/domain/services/UserService/UserService';

export class CreatePersonUseCase {
  constructor(private personService?: PersonService, private userService?: UserService) {
    this.personService = new PersonService();
    this.userService = new UserService();
  }

  async createPerson(person: NewPersonDto) {
    try {
      const response: any = await this.personService?.createPerson(person);
      if (!response) { throw new PersonApplicationError(undefined, 'INTERNAL_SERVER_ERROR') }

      if (person.create_user == true) {
        const responseUser: any =  await this.userService.createUser(
          {
            user: person.main_identification,
            password: person.main_identification
          }
        )

        console.log(responseUser)

      }
      return { ...response.dataValues };
    } catch (error: any) {
      return error;
    }
  }
}
