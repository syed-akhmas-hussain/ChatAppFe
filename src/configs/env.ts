interface EnvironmentConfig {
  apiUrl: '';
  assetUrl: '';
}
export type EnvironmentName = 'test' | 'dev' | 'qa' | 'staging' | 'prod';
type Environment = Record<EnvironmentName, EnvironmentConfig>;
const environment: Environment = {
  test: {
    apiUrl: '',
    assetUrl: '',
  },
  dev: {
    apiUrl: '',
    assetUrl: '',
  },
  qa: {
    apiUrl: '',
    assetUrl: '',
  },
  staging: {
    apiUrl: '',
    assetUrl: '',
  },
  prod: {
    apiUrl: '',
    assetUrl: '',
  },
};
const SERVER: EnvironmentName = 'dev';
export const ENV = environment[SERVER];
