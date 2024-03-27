export class Logger {
  private color_reset: string = '\x1b[0m';
  private color_red: string = '\x1b[31m';
  private color_green: string = '\x1b[32m';
  private color_yellow: string = '\x1b[33m';
  private color_blue: string = '\x1b[34m';
  private color_magenta: string = '\x1b[35m';
  private color_cyan: string = '\x1b[36m';
  private color_white: string = '\x1b[37m';

  private path: string;
  private currentTime: string;

  constructor(pathClase: string = '') {
    this.path = pathClase;
    this.currentTime = new Date().toLocaleTimeString();
  }

  log(log: any): void {
    console.log(log);
  }

  error(error: string = ''): void {
    console.error(
      `${this.color_yellow}[${this.currentTime}] - Ha sucedido un error en ${this.path},\x1b[0m \n ${this.color_red}Error: ${error}\x1b[0m`,
    );
  }

  initialize(process: string = ''): void {
    console.log(`${this.color_yellow}-${'-'.repeat(25)}${this.color_reset}`);
    console.log(
      `${this.color_green}[${this.currentTime}] - Se ha iniciado el proceso | ${process}${this.color_reset}`,
    );
    console.log(`${this.color_yellow}-${'-'.repeat(25)}${this.color_reset}`);
  }

  message(message: string = ''): void {
    console.log(
      `${this.color_green}[${this.currentTime}] - ${message}${this.color_reset}`,
    );
  }

  finalize(message: string = ''): void {
    console.log(
      `${this.color_cyan}[${this.currentTime}] - ${message}${this.color_reset}`,
    );
  }
}
