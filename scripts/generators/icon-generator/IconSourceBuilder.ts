// scripts/icon-generator/generator.ts

import { Icon } from './types';
import {
  createIcon,
  createHeader,
  createIconsObject,
  createIconType,
  createImports,
} from './templates';

export function generate(icons: Icon[]): string {
  return [
    createHeader(),
    '',
    createImports(icons),
    '',
    createIcon(icons),
    '',
    createIconsObject(icons),
    '',
    createIconType(icons),
    '',
  ].join('\n');
}
