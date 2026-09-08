import { ApiRequestMap } from '@/constants/api';
import { MutationApi, MutationApiName } from '../types';
import { useMutation } from '@tanstack/react-query';
import { sendRequest } from '../axios';
//create a url object
//create response type objects which map keys each url obj
//create request type object which map keys of url obj
//create api end point object which combines url and method
//url name will be extracted to use as referencing pointer for request/response type
//See api.ts in src/constants

export const useMutationApi = <T extends MutationApiName>({
  apiName,
  params,
  signal,
  headers,
  ...rest
}: MutationApi<T>) => {
  const requestConfig = {
    params,
    signal,
    headers,
  };
  const mutationFn = (body: ApiRequestMap[T]) =>
    sendRequest(apiName, {
      ...requestConfig,
      data: body,
    });
  return useMutation({
    ...rest,
    mutationFn,
  });
};
