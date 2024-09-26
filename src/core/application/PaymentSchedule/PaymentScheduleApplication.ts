export interface PaymentScheduleApplication {
  // TODO: Los tipo de respuesta que tendra la promesa, hacerlo correctamente.
  schedule_simulation(data: any): Promise<Array<any>>;

  // TO DO: Realizar el retorno de la data, como sera unica, entonces que sea un objecto y no un array de objectos
  details_schedule(sale_id: number | string): Promise<Array<any>>;
  all_payments(sale_id: number | string): Promise<Array<any>>;
}
