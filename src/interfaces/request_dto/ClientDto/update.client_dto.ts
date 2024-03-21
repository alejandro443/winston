import { ClientDto } from "@src/core/shared/dto/Client/client_dto";

export type UpdateClientRequestDto = Omit<ClientDto, 'id'>;