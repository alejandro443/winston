import { WorkerDto } from "@src/core/shared/dto/Worker/worker_dto";

export type UpdateWorkerRequestDto = Omit<WorkerDto, 'id'>;