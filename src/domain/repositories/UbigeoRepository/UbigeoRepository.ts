import { Ubigeo } from 'src/domain/entities/Ubigeo.entity';
import { Op } from 'sequelize';

export class UbigeoRepository {
  constructor() {}

  async searchSensitive(searchTerm: any) {
    const parsedTerm = !isNaN(searchTerm) ? parseFloat(searchTerm) : null;
    try {
      return Ubigeo.findAll({
        where: {
          [Op.or]: [
            // Para columnas de texto
            { department: { [Op.iLike]: `%${searchTerm}%` } },
            { province: { [Op.iLike]: `%${searchTerm}%` } },
            { district: { [Op.iLike]: `%${searchTerm}%` } },

            // Para columnas numéricas
            {
              [Op.or]: [
                { ubigeo: { [Op.eq]: parsedTerm } }
              ]
            }
          ],
        },
      });
    } catch (error: any) {
      return error;
    }
  }
}
