// scripts/icon-generator/types.ts

export interface Icon {
  /**
   * Original file name.
   * Example: heart.svg
   */
  fileName: string;

  /**
   * Absolute path to the SVG.
   */
  filePath: string;

  /**
   * Component name.
   * Example: Heart
   */
  componentName: string;
}

export interface GenerateResult {
  code: string;
  iconNames: string[];
}
