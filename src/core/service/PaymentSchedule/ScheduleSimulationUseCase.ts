import { v4 as uuidv4 } from 'uuid';

export class ScheduleSimulationUseCase {
  constructor() {}
  
  async simulation(
    {
      date_first_payment = new Date(),
      total_sale,
      number_quotas,
      waiting_period,
      period = 'day'
    }: any) {
  
    const period_enum = {
      day: 1,
      week: 7,
      month: 30,
      year: 365
    }
  
    try {
      const paymentAmount = (total_sale / number_quotas).toFixed(2);
      const missingPaymentAmount = parseFloat(paymentAmount) + (total_sale - number_quotas * parseFloat(paymentAmount));
  
      let paymentDateEstimated = new Date(date_first_payment ? date_first_payment : new Date());
      const schedulePayments = Array.from({ length: number_quotas }, (_, i) => {
        const paymentUuid = uuidv4();
        const paymentLabel = paymentUuid.split('-')[0];
  
        const paymentDate = new Date(paymentDateEstimated);
        paymentDateEstimated.setDate(paymentDateEstimated.getDate() +  period_enum[period]);
  
        const deadline = new Date(paymentDate);
        deadline.setDate(paymentDate.getDate() + waiting_period);
  
        const paymentAmountCalculated = i === number_quotas - 1 ? missingPaymentAmount : parseFloat(paymentAmount);
  
        return {
          uuid: paymentUuid,
          number_quota: i + 1,
          label: paymentLabel,
          deadline: deadline,
          payment_amount: paymentAmountCalculated,
          payment_date: paymentDate
        };
      });
  
      return schedulePayments;
  
    } catch (error: any) {
      return error;
    }
  }
}
