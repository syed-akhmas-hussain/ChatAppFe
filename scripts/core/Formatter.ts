export class Formatter {
  static format(code: string): string {
    return code.trimEnd() + '\n';
  }
}
