import { Module } from "@nestjs/common";
import { ReniecApiClient } from "./service-reniec";
import { SunatApiClient } from "./service-sunat";
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ReniecApiClient, SunatApiClient],
  exports: [ReniecApiClient, SunatApiClient],
})
export class ExternalServiceModule {}
