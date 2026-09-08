import { isAxiosError } from 'axios';
import { apiClient } from './axios';
import { apiConfig } from './api.config';
import { HEADER_KEYS } from '@/constants/headers';
import { setHeaders } from './helpers';
import { getAccessToken } from './tokenStorage';
import { refreshAccessToken } from './refreshToken';
import {
  InterceptorOptions,
  OnError,
  RequestInterceptor,
  ResponseInterceptor,
} from './types';

const handleUnauthorized = async (
  error: unknown,
  onResponseError: OnError | undefined,
) => {
  if (
    !isAxiosError(error) ||
    !error.config ||
    error.response?.status !== 401 ||
    error.config?.skipRefresh ||
    error.config?._retry
  ) {
    return Promise.reject(error);
  }
  error.config._retry = true;
  try {
    const token = await refreshAccessToken();
    setHeaders(error.config, { [HEADER_KEYS.AUTHORIZATION]: token });
    return await apiClient(error.config);
  } catch (retryError) {
    return onResponseError?.(retryError) ?? Promise.reject(retryError);
  }
};
const registerRequestInterceptor = ({
  onRequest,
  onRequestError,
}: RequestInterceptor) => {
  return apiClient.interceptors.request.use(
    config => {
      const { getAppVersion, getLanguage, getPlatform } = apiConfig;
      setHeaders(config, {
        ...(!config.skipAuth && {
          [HEADER_KEYS.AUTHORIZATION]: getAccessToken(),
        }),
        [HEADER_KEYS.ACCEPT_LANGUAGE]: getLanguage(),
        [HEADER_KEYS.APP_VERSION]: getAppVersion(),
        [HEADER_KEYS.PLATFORM]: getPlatform(),
      });
      return onRequest?.(config) ?? config;
    },
    error => {
      return onRequestError?.(error) ?? Promise.reject(error);
    },
  );
};
const registerResponseInterceptor = ({
  onResponse,
  onResponseError,
}: ResponseInterceptor) => {
  return apiClient.interceptors.response.use(
    resp => {
      return onResponse?.(resp) ?? resp;
    },
    error => handleUnauthorized(error, onResponseError),
  );
};
export const configureInterceptors = ({
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
}: InterceptorOptions) => {
  registerRequestInterceptor({ onRequest, onRequestError });
  registerResponseInterceptor({ onResponse, onResponseError });
};
