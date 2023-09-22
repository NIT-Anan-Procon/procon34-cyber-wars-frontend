import { useQuery } from '@tanstack/react-query';

import { CodeQueryKey } from './fetchCodeQueryKey';
import { fetchCodeFn }  from '.';

export const useFetchCodeQuery= () => {
  return useQuery({
    queryKey: CodeQueryKey,
    queryFn : fetchCodeFn
  });
};