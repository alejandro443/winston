import * as winston from 'winston';

export const winstonLoggerConfig = {
  transports: [
    // Configuración para la consola
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss', // Formato legible de fecha y hora
        }),
        winston.format.colorize(), // Colores para diferenciar niveles
        winston.format.printf((info) => {
          // Aquí estamos nombrando a Winston explícitamente en los mensajes de consola
          return `[Winston] [${info.timestamp}] ${info.level}: ${info.message}`;
        }),
      ),
    }),

    // Configuración para el archivo de logs de errores
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }), // Incluir el stack de errores
        winston.format.json(), // Guardar en formato JSON para un análisis más estructurado
      ),
    }),

    // Configuración para el archivo de logs combinados
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.json(), // Guardar en formato JSON para un análisis más estructurado
      ),
    }),
  ],
  // Configuración de niveles personalizados (opcional)
  level: 'info', // Nivel mínimo de logging
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
};
