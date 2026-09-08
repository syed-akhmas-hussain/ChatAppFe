import { GetApi, GetApiName } from '@/services/api/types';
import { useQuery } from '@tanstack/react-query';
import { sendRequest } from '../axios';
//create a url object
//create response type objects which map keys each url obj
//create request type object which map keys of url obj
//create api end point object which combines url and method
//url name will be extracted to use as referencing pointer for request/response type
//See api.ts in src/constants
export const useGetApi = <T extends GetApiName>({
  queryKey,
  apiName,
  params,
  signal,
  headers,
  ...rest
}: GetApi<T>) => {
  const requestConfig = {
    params,
    signal,
    headers,
  };
  const queryFn = () => sendRequest(apiName, requestConfig);
  return useQuery({
    ...rest,
    queryKey,
    queryFn,
  });
};
