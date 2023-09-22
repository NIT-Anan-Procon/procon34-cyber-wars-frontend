import { useQuery } from '@tanstack/react-query';

import { fetchRoomInfoFn }       from './fetchRoomInfoFn';
import { fetchRoomInfoQueryKey } from './fetchRoomInfoQueryKey';

export const useFetchRoomInfoQuery= () => {
  return useQuery({
    queryKey: fetchRoomInfoQueryKey,
    queryFn : fetchRoomInfoFn
  });
};