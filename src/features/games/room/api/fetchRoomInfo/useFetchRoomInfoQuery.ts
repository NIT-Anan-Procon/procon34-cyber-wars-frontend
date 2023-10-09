import { useQuery } from '@tanstack/react-query';

import { fetchRoomInfoFn }       from './fetchRoomInfoFn';
import { fetchRoomInfoQueryKey } from './fetchRoomInfoQueryKey';
import { QueryConfig }           from '@/lib/react-query';

type UseFetchRoomInfoQueryOptions= {
  config?: QueryConfig<typeof fetchRoomInfoFn>;
};

export const useFetchRoomInfoQuery= ({ config }: UseFetchRoomInfoQueryOptions ) => {
  return useQuery({
    queryKey: fetchRoomInfoQueryKey,
    queryFn : fetchRoomInfoFn,
    ...config
  });
};