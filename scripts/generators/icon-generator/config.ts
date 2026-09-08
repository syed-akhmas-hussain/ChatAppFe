import path from 'path';

export const iconConfig = {
  directory: path.resolve(process.cwd(), 'src/assets/Icons/svg'),

  output: path.resolve(process.cwd(), 'src/assets/Icons/svg/index.ts'),

  validIconRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*\.svg$/,
} as const;

export default iconConfig;
