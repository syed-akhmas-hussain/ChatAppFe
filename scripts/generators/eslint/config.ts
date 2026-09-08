import { RestrictedImportConfig } from './types';

const config: RestrictedImportConfig[] = [
  {
    directory: 'src/components/atoms',
    importFrom: '@/components/atoms',
  },
  {
    directory: 'src/theme',
    importFrom: '@/theme',
  },
];

export default config;
