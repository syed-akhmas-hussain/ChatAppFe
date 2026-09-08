import fs from 'fs';
import path from 'path';

export class FileWriter {
  static write(filePath: string, content: string) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
  }

  static remove(filePath: string) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  static exists(filePath: string) {
    return fs.existsSync(filePath);
  }
}
