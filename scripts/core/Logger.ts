export class Logger {
  static info(message: string) {
    console.log(`ℹ ${message}`);
  }

  static success(message: string) {
    console.log(`✔ ${message}`);
  }

  static warn(message: string) {
    console.warn(`⚠ ${message}`);
  }

  static error(message: string) {
    console.error(`✖ ${message}`);
  }
}
