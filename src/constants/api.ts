import { ApiRequest, ApiResponse, InfiniteApiResponse } from '@/services/api';

export const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
} as const;
export const ENDPOINT_NAMES = {
  HOME: 'HOME',
  ABOUT: 'ABOUT',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  USERS: 'USERS',
} as const;
export const ENDPOINTS = {
  [ENDPOINT_NAMES.HOME]: {
    url: 'api/home',
    method: HTTP_METHODS.GET,
  },
  [ENDPOINT_NAMES.ABOUT]: {
    url: 'api/about',
    method: HTTP_METHODS.GET,
  },
  [ENDPOINT_NAMES.REFRESH_TOKEN]: {
    url: 'auth/refresh-token',
    method: HTTP_METHODS.POST,
  },
  [ENDPOINT_NAMES.USERS]: {
    url: 'api/users',
    method: HTTP_METHODS.GET,
  },
} as const;
export interface ApiRequestMap {
  [ENDPOINT_NAMES.HOME]: ApiRequest<any>; //write type name, which must come from ApiRequest.d.ts(global)
  [ENDPOINT_NAMES.ABOUT]: ApiRequest<any>;
  [ENDPOINT_NAMES.REFRESH_TOKEN]: ApiRequest<any>;
  [ENDPOINT_NAMES.USERS]: ApiRequest<any>;
}
export interface ApiResponseMap {
  [ENDPOINT_NAMES.HOME]: ApiResponse<any>; //write type name, which must come from ApiResponse.d.ts(global)
  [ENDPOINT_NAMES.ABOUT]: ApiResponse<any>;
  [ENDPOINT_NAMES.REFRESH_TOKEN]: ApiResponse<any>;
  [ENDPOINT_NAMES.USERS]: InfiniteApiResponse<any>;
}
