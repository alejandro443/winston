import { RolResponse } from "@src/interfaces/responses/rol.response";

export interface RolApplication {
  createRol(newRol: any): Promise<RolResponse>;
}
