import { useQuery } from '@tanstack/react-query';

import { StartTimeQueryKey } from './fetchStartTimeQueryKey';
import { fetchStartTimeFn }  from '.';
import { QueryConfig }       from '@/lib/react-query';

type UseStartTimeQueryOptions= {
  config?: QueryConfig<typeof fetchStartTimeFn>
};

export const useFetchStartTimeQuery= ({ config }: UseStartTimeQueryOptions ) => {
  return useQuery({
    queryKey: StartTimeQueryKey,
    queryFn : fetchStartTimeFn,
    ...config
  });
};