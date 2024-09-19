const { v4: uuidv4 } = require('uuid');

export class ScheduleSimulationUseCase {
  constructor() {}
  
  async simulation(body: any) {
    const period = {
      day: 1,
      week: 7,
      month: 30,
      year: 365
    }

    try {
      const date_first_payment = body.date_first_payment ?  new Date(body.date_first_payment) : new Date();

      const schedule_payments = [];
      const payment_amount = (body.total_sale / body.number_quotas);

      let payment_date_stimated = new Date(date_first_payment);
  
      for (let i = 0; i < body.number_quotas; i++) {

        const payment_uuid = uuidv4();
        const payment_label = payment_uuid.split('-')[0];
        
        let payment_date = new Date(payment_date_stimated);
        payment_date_stimated.setDate(payment_date_stimated.getDate() + period[body.period]);

        let deadline = new Date(payment_date);
        deadline.setDate(payment_date.getDate() + body.waiting_period);
        
        schedule_payments.push({
          uuid: payment_uuid,
          number_quota: i + 1,
          label: payment_label,
          deadline: deadline,
          payment_amount: payment_amount,
          payment_date: payment_date
        });
      }
    
      return schedule_payments;

    } catch (error: any) {
      return error;
    }
  }
}
