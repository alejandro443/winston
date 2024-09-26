export interface PaymentScheduleApplication {
  // TODO: Los tipo de respuesta que tendra la promesa, hacerlo correctamente.
  schedule_simulation(searchTerm: string): Promise<Array<any>>;
  details_schedule(sale_id: number | string): Promise<Array<any>>;
}
