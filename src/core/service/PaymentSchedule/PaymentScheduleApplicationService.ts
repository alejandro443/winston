import { PaymentScheduleApplication } from 'src/core/application/PaymentSchedule/PaymentScheduleApplication';
import { ScheduleSimulationUseCase } from './ScheduleSimulationUseCase';
import { DetailsScheduleUseCase } from './DetailsScheduleUseCase';
import { PaymentScheduleApplicationError } from '@src/core/shared/error/PaymentScheduleApplicationError';

export class PaymentScheduleApplicationService
  implements PaymentScheduleApplication {
  constructor(
    private simulationUseCase?: ScheduleSimulationUseCase,
    private detailsScheduleUseCase?: DetailsScheduleUseCase
  ) {
    this.simulationUseCase = new ScheduleSimulationUseCase();
    this.detailsScheduleUseCase = new DetailsScheduleUseCase();
  }

  async schedule_simulation(searchTerm: string) {
    try {
      const response: any = await this.simulationUseCase?.simulation(searchTerm);

      return response;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }

  async details_schedule(sale_id: number | string) {
    try {
      const response: any = await this.detailsScheduleUseCase?.details_schedule(sale_id);
      return response;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }
}
