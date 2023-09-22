import { useQuery } from '@tanstack/react-query';

import { StartTimeQueryKey } from './fetchStartTimeQueryKey';
import { fetchStartTimeFn } from '.';

export const useFetchStartTimeQuery= () => {
  return useQuery({
    queryKey: StartTimeQueryKey,
    queryFn : fetchStartTimeFn
  });
};