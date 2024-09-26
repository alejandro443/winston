import { Logger } from "@src/infraestructure/shared/log/Logger";

const log = new Logger()
export function date_for_view(value: string): string {
  if (!value) {
    log.error(`Error: Fecha no válida - ${value}`)
    return ''
  };

  // Convertir la cadena a una fecha
  const date = new Date(value);

  // Verificar si la fecha es válida
  if (isNaN(date.getTime())) {
    log.error(`Error: isNaN - Fecha no válida - ${value}`)

    return '';
  }

  // Obtener el día, mes y año
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}


export function days_passed_since(date: Date): number {
  const today = new Date();
  
  // Si la fecha es futura, devolver 0
  if (date > today) {
    return 0;
  }
  
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  
  // Calcular la diferencia en milisegundos entre hoy y la fecha proporcionada
  const diffInMilliseconds = today.getTime() - date.getTime();
  
  // Devolver la diferencia en días, redondeando hacia abajo
  return Math.floor(diffInMilliseconds / millisecondsPerDay);
}