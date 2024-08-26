import { Ubigeo } from 'src/domain/entities/Ubigeo.entity';
import { Op } from 'sequelize';

export class UbigeoRepository {
  constructor() {}

  async searchSensitive(searchTerm: string) {
    const parsedTerm = parseFloat(searchTerm);

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
                { ubigeo: { [Op.eq]: parsedTerm } },
                { altitud: { [Op.eq]: parsedTerm } },
                { latitud: { [Op.eq]: parsedTerm } },
                { longitud: { [Op.eq]: parsedTerm } },
              ],
              [Op.and]: [
                { [Op.or]: [
                  { ubigeo: { [Op.is]: null } },
                  { altitud: { [Op.is]: null } },
                  { latitud: { [Op.is]: null } },
                  { longitud: { [Op.is]: null } },
                ] }
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
