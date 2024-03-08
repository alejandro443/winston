import { Module } from "@nestjs/common";
import { RootController } from "./controllers/root.controller";
import { RolController } from "./controllers/rol.controller";

@Module({
    controllers: [
        RootController,
        RolController
    ],
})

export class InterfacesModule { }