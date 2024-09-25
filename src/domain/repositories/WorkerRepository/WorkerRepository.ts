import { Person } from '@src/domain/entities/Person.entity';
import { Rol } from '@src/domain/entities/Rol.entity';
import { User } from '@src/domain/entities/User.entity';
import { UserRol } from '@src/domain/entities/UserRol.entity';
import {
  NewWorkerDto,
  UpdateWorkerDto,
} from 'src/core/shared/dto/Worker/worker_dto';
import { Worker } from 'src/domain/entities/Worker.entity';

export class WorkerRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Worker.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Worker.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(worker: NewWorkerDto) {
    try {
      return Worker.create(worker);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, worker: UpdateWorkerDto) {
    try {
      return Worker.update(worker, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Worker.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async userWorkers() {
    try {
      const data: any = await Worker.findAll({
        include: [
          {
            model: User,
            required: true,
            include: [
              {
                model: UserRol,
                required: true,
                attributes: ['id'],
                include: [
                  {
                    model: Rol,
                    required: true,
                    attributes: ['name']
                  }
                ]
              }
            ],
            attributes: ['user'],
            where: { consultant: false }
          },
          {
            model: Person,
            required: true,
            attributes: ['main_email', 'name', 'last_name']
          }
        ],
        attributes: ['id', 'status', 'created_at', 'updated_at'],
        where: { deleted_at: null } 
      });

      return data;
    } catch (error: any) {
      console.log(error)
      return error;
    }
  }
}
