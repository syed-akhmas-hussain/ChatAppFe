// scripts/icon-generator/scanner.ts

import fs from 'fs';
import path from 'path';

import { Icon } from './types';
import { alphabeticalSort, isSvgFile, kebabToPascal } from './utils';

export function scan(directory: string): Icon[] {
  const files = fs
    .readdirSync(directory)
    .filter(isSvgFile)
    .sort(alphabeticalSort);

  return files.map(fileName => ({
    fileName,
    filePath: path.join(directory, fileName),
    componentName: kebabToPascal(fileName),
  }));
}
