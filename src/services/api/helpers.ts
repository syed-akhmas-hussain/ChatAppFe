import { HEADER_KEYS } from '@/constants';
import { InternalAxiosRequestConfig } from 'axios';

const setHeader = (
  config: InternalAxiosRequestConfig,
  key: string,
  value: string | undefined,
) => {
  if (value === undefined) return;
  if (
    key === HEADER_KEYS.AUTHORIZATION &&
    !config.headers.has(HEADER_KEYS.AUTHORIZATION) &&
    value !== undefined
  ) {
    config.headers.set(HEADER_KEYS.AUTHORIZATION, `Bearer ${value}`);
  }

  config.headers.set(key, value);
};
export const setHeaders = (
  config: InternalAxiosRequestConfig,
  headerObj: Record<string, string | undefined>,
) => {
  for (const [key, value] of Object.entries(headerObj))
    setHeader(config, key, value);
};
