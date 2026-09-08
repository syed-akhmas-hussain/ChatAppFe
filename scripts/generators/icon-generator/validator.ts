// scripts/icon-generator/validator.ts

import iconConfig from './config';
import { Icon } from './types';

export function validate(icons: Icon[]): void {
  validateFileNames(icons);
  validateDuplicateComponents(icons);
}

function validateFileNames(icons: Icon[]): void {
  for (const icon of icons) {
    if (!iconConfig.validIconRegex.test(icon.fileName)) {
      throw new Error(
        [
          '',
          '❌ Invalid icon filename',
          '',
          `Found: ${icon.fileName}`,
          'Expected: kebab-case.svg',
          '',
          'Examples:',
          '  home.svg',
          '  arrow-left.svg',
          '  user-circle.svg',
        ].join('\n'),
      );
    }
  }
}

function validateDuplicateComponents(icons: Icon[]): void {
  const seen = new Map<string, string>();

  for (const icon of icons) {
    const existing = seen.get(icon.componentName);

    if (existing) {
      throw new Error(
        [
          '',
          '❌ Duplicate component name',
          '',
          `Files:`,
          `  - ${existing}`,
          `  - ${icon.fileName}`,
          '',
          `Both generate: ${icon.componentName}`,
        ].join('\n'),
      );
    }

    seen.set(icon.componentName, icon.fileName);
  }
}
