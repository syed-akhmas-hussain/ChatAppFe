import { APP_CONFIG, ENV } from '@/configs';
import { ApiResponseMap, ENDPOINTS, HTTP_METHODS } from '@/constants/api';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiName } from './types';

export const apiClient = axios.create({
  baseURL: ENV.apiUrl,
  timeout: APP_CONFIG.apiTimeout,
  headers: {
    Accept: 'application/json',
  },
});

export const sendRequest = async <T extends ApiName>(
  apiName: T,
  config: AxiosRequestConfig = {},
): Promise<ApiResponseMap[T]> => {
  const { method, url } = ENDPOINTS[apiName];
  let response: AxiosResponse<ApiResponseMap[T]>;
  switch (method) {
    case HTTP_METHODS.GET: {
      response = await apiClient.get<ApiResponseMap[T]>(url, config);
      return response.data;
    }
    case HTTP_METHODS.POST: {
      response = await apiClient.post<ApiResponseMap[T]>(
        url,
        config.data,
        config,
      );
      return response.data;
    }
    //add these when u have patch, put and delete endpoints
    // case HTTP_METHODS.PUT: {
    //   response = await apiClient.put<ApiResponseMap[T]>(url, config.data, config);
    //   return response.data;
    // }
    // case HTTP_METHODS.DELETE: {
    //   response = await apiClient.delete<ApiResponseMap[T]>(url, config);
    //   return response.data;
    // }
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};
