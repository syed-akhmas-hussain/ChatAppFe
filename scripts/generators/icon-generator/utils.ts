// scripts/icon-generator/utils.ts

export function isSvgFile(fileName: string): boolean {
  return fileName.endsWith('.svg');
}

export function removeExtension(fileName: string): string {
  return fileName.replace(/\.svg$/, '');
}

export function kebabToPascal(fileName: string): string {
  return removeExtension(fileName)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function alphabeticalSort(a: string, b: string): number {
  return a.localeCompare(b);
}
