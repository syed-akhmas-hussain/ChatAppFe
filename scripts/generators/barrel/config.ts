export const barrelConfig = {
  /**
   * Directories (relative to config.root)
   * where barrel files should be generated recursively.
   */
  include: [
    'components',
    // 'screens',
    'hooks',
    'theme',
    'configs',
    // 'utils',
    'services',
    'navigation',
    // 'store',
    // 'assets',
    'constants',
    'types',
  ],
} as const;

export default barrelConfig;
