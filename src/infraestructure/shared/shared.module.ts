import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import ServerConfiguration from "./configurations/server.configuration";
import DatabaseConfiguration from "./configurations/database.configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [
        DatabaseConfiguration,
        ServerConfiguration
      ]
    })
  ]
})

export class SharedModule { }