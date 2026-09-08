// scripts/icon-generator/templates.ts

import { Icon } from './types';

export function createHeader(): string {
  return `/**
 * AUTO-GENERATED FILE.
 * DO NOT EDIT MANUALLY.
 */`;
}

export function createImports(icons: Icon[]): string {
  const svgImports = icons
    .map(icon => `import ${icon.componentName}Svg from './${icon.fileName}';`)
    .join('\n');

  return `import { createIcon } from './factory';

${svgImports}`;
}

export function createIcon(icons: Icon[]): string {
  return icons
    .map(
      icon =>
        `const ${icon.componentName} = createIcon(${icon.componentName}Svg);`,
    )
    .join('\n');
}

export function createIconType(icons: Icon[]): string {
  if (!icons.length) {
    return `export type IconName = never;`;
  }

  return `export type IconName =
${icons.map(icon => `  | '${icon.componentName}'`).join('\n')};`;
}
export function createIconsObject(icons: Icon[]): string {
  if (!icons.length) {
    return `export const Icons = {} as const;`;
  }

  return `export const Icons = {
${icons.map(icon => `  ${icon.componentName},`).join('\n')}
} as const;`;
}
