import { ClassificationApplication } from "src/core/application/Classification/ClassificationApplication";

export class ClassificationApplicationService implements ClassificationApplication {

  constructor() { }

  async getAllClassification() { return []}
  async getOneClassification() { return {}}
  async createClassification() { return {}}
  async updateClassification() { return {}}
  async deleteClassification() { return null}

}