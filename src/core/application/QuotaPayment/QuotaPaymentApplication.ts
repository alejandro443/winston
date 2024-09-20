export interface QuotaPaymentApplication {
  // TODO: Los tipo de respuesta que tendra la promesa, hacerlo correctamente.
  find_all(id: number | string): Promise<Array<any>>;
  create_one(body: any): Promise<any>;
}
