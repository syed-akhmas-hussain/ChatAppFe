import {
  ApiRequestMap,
  ApiResponseMap,
  ENDPOINTS,
  HTTP_METHODS,
} from '@/constants/api';
import {
  MutationOptions,
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export type HttpMethod = (typeof HTTP_METHODS)[keyof typeof HTTP_METHODS];

export type EachEndpoint = {
  url: string;
  method: HttpMethod;
};

export type ApiRequest<T> = {
  data: T;
};

export type ApiResponse<T> = {
  data: T;
  message: string;
};

export type InfiniteApiResponse<T> = ApiResponse<T> & {
  nextCursor: string | null;
};

export type ApiName = keyof typeof ENDPOINTS;

export type ApiConfig = {
  getLanguage: () => string;
  getPlatform: () => 'ios' | 'android';
  getAppVersion: () => string;
};

type ApiNamesByMethod<TMethod extends EachEndpoint['method']> = {
  [K in keyof typeof ENDPOINTS]: (typeof ENDPOINTS)[K]['method'] extends TMethod
    ? K
    : never;
}[keyof typeof ENDPOINTS];

export type GetApiName = ApiNamesByMethod<typeof HTTP_METHODS.GET>;

export type PostApiName = ApiNamesByMethod<typeof HTTP_METHODS.POST>;

export type PutApiName = ApiNamesByMethod<typeof HTTP_METHODS.PUT>;

export type PatchApiName = ApiNamesByMethod<typeof HTTP_METHODS.PATCH>;

export type DeleteApiName = ApiNamesByMethod<typeof HTTP_METHODS.DELETE>;

type InfiniteApiName = {
  [K in keyof ApiResponseMap]: ApiResponseMap[K] extends InfiniteApiResponse<any>
    ? K
    : never;
}[keyof ApiResponseMap];

export type InfiniteQueryApiName = InfiniteApiName;

export type MutationApiName =
  | PostApiName
  | PutApiName
  | PatchApiName
  | DeleteApiName;

interface ApiNameProps<T extends ApiName> {
  apiName: T;
}

type ApiRequestConfig = Pick<
  AxiosRequestConfig,
  'params' | 'signal' | 'headers'
> & {
  pageParam?: string;
};

export type GetApi<T extends GetApiName> = Omit<
  UseQueryOptions<ApiResponseMap[T]>,
  'queryFn'
> &
  ApiRequestConfig &
  ApiNameProps<T>;

export type InfiniteQueryApi<T extends InfiniteQueryApiName> = Omit<
  UseInfiniteQueryOptions<
    ApiResponseMap[T],
    Error,
    ApiResponseMap[T],
    readonly unknown[],
    string | null
  >,
  'queryFn' | 'getNextPageParam' | 'initialPageParam'
> &
  ApiRequestConfig &
  ApiNameProps<T>;

export type MutationApi<T extends MutationApiName> = Omit<
  MutationOptions<ApiResponseMap[T], Error, ApiRequestMap[T]>,
  'mutationFn'
> &
  ApiRequestConfig &
  ApiNameProps<T>;

//interceptor types
export type OnRequest = (
  config: InternalAxiosRequestConfig,
) => InternalAxiosRequestConfig;
export type OnResponse = (res: AxiosResponse) => AxiosResponse;
export type OnError = (error: unknown) => unknown;
export type InterceptorOptions = {
  onRequest?: OnRequest;
  onRequestError?: OnError;
  onResponse?: OnResponse;
  onResponseError?: OnError;
};

export type RequestInterceptor = Pick<
  InterceptorOptions,
  'onRequest' | 'onRequestError'
>;

export type ResponseInterceptor = Pick<
  InterceptorOptions,
  'onResponse' | 'onResponseError'
>;

//refreshToken.ts
export type WaitingRequest = {
  resolve: (accessToken: string) => void;
  reject: (error: unknown) => void;
};
