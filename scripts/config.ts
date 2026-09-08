export const config = {
  root: 'src',

  ignoreDirectories: [
    'node_modules',
    '.git',
    '.github',
    '.vscode',
    'android',
    'ios',
    'build',
    'dist',
    'coverage',
    '__tests__',
    '__mocks__',
  ] as string[],

  ignoreFiles: [
    'index.ts',
    'index.tsx',
    'generate.ts',
    'generate.tsx',
  ] as string[],

  ignorePatterns: [
    /\.d\.ts$/,
    /\.test\.(ts|tsx)$/,
    /\.spec\.(ts|tsx)$/,
    /\.stories\.(ts|tsx)$/,
  ] as RegExp[],

  ignoreHidden: true,

  extensions: ['.ts', '.tsx'] as string[],

  barrelFileName: 'index.ts',
};
