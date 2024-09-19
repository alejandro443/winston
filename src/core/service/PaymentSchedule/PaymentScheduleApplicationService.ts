import { PaymentScheduleApplication } from 'src/core/application/PaymentSchedule/PaymentScheduleApplication';
import { ScheduleSimulationUseCase } from './ScheduleSimulationUseCase';

export class PaymentScheduleApplicationService
  implements PaymentScheduleApplication {
  constructor(
    private simulationUseCase?: ScheduleSimulationUseCase
  ) {
    this.simulationUseCase = new ScheduleSimulationUseCase();
  }

  async schedule_simulation(searchTerm: string) {
    try {
      const response: any = await this.simulationUseCase?.simulation(searchTerm);

      return response;
    } catch (error: any) {
      return error;
    }
  }
}
