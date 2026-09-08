import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { sendRequest } from '../axios';
import { InfiniteQueryApi, InfiniteQueryApiName } from '../types';
type PageParam = string | null;
export const useInfiniteQueryApi = <T extends InfiniteQueryApiName>({
  queryKey,
  apiName,
  params,
  signal,
  headers,
  ...rest
}: InfiniteQueryApi<T>) => {
  const requestConfig = {
    params,
    signal,
    headers,
  };
  const queryFn = ({
    pageParam,
  }: QueryFunctionContext<readonly unknown[], PageParam>) =>
    sendRequest(apiName, {
      ...requestConfig,
      params: {
        ...requestConfig.params,
        cursor: pageParam,
      },
    });
  return useInfiniteQuery({
    ...rest,
    queryKey,
    queryFn,
    initialPageParam: null,
    getNextPageParam: lastPage => lastPage.nextCursor ?? undefined,
  });
};
