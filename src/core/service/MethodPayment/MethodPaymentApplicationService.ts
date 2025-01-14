import { MethodPaymentApplication } from 'src/core/application/MethodPayment/MethodPaymentApplication';
import {
  NewMethodPaymentDto,
  UpdateMethodPaymentDto,
} from 'src/core/shared/dto/MethodPayment/method_payment_dto';
import { GetOneMethodPaymentUseCase } from './GetOneMethodPaymentUseCase';
import { GetAllMethodPaymentUseCase } from './GetAllMethodPaymentUseCase';
import { CreateMethodPaymentUseCase } from './CreateMethodPaymentUseCase';
import { UpdateMethodPaymentUseCase } from './UpdateMethodPaymentUseCase';
import { DeleteMethodPaymentUseCase } from './DeleteMethodPaymentUseCase';

export class MethodPaymentApplicationService implements MethodPaymentApplication {
  constructor(
    private getOneUseCase?: GetOneMethodPaymentUseCase,
    private getAllUseCase?: GetAllMethodPaymentUseCase,
    private createUseCase?: CreateMethodPaymentUseCase,
    private updateUseCase?: UpdateMethodPaymentUseCase,
    private deleteUseCase?: DeleteMethodPaymentUseCase,
  ) {
    this.getOneUseCase = new GetOneMethodPaymentUseCase();
    this.getAllUseCase = new GetAllMethodPaymentUseCase();
    this.createUseCase = new CreateMethodPaymentUseCase();
    this.updateUseCase = new UpdateMethodPaymentUseCase();
    this.deleteUseCase = new DeleteMethodPaymentUseCase();
  }

  async getAllMethodPayment() {
    try {
      return this.getAllUseCase?.getAllMethodPayment();
    } catch (error: any) {
      return error;
    }
  }

  async getOneMethodPayment(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneMethodPayment(id);
    } catch (error: any) {
      return error;
    }
  }

  async createMethodPayment(method_payment: NewMethodPaymentDto): Promise<any> {
    try {
      return this.createUseCase?.createMethodPayment(method_payment);
    } catch (error: any) {
      return error;
    }
  }

  async updateMethodPayment(
    id: number,
    method_payment: UpdateMethodPaymentDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateMethodPayment(id, method_payment);
    } catch (error: any) {
      return error;
    }
  }

  async deleteMethodPayment(id: number) {
    try {
      return this.deleteUseCase?.deleteMethodPayment(id);
    } catch (error: any) {
      return error;
    }
  }
}
