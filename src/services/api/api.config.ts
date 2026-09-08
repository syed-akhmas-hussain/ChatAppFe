import { APP_CONFIG } from '@/configs';
import { isIos } from '@/utils/utils';
import { ApiConfig } from './types';

const defaults: ApiConfig = {
  getLanguage: () => 'en',
  getPlatform: () => (isIos ? 'ios' : 'android'),
  getAppVersion: () => APP_CONFIG.appVersion,
};

export const apiConfig: ApiConfig = {
  ...defaults,
};

export const configureApi = (config: Partial<ApiConfig> = {}): void => {
  Object.assign(apiConfig, config);
};
