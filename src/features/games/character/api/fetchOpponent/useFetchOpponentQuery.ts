import { useQuery } from '@tanstack/react-query';

import { OpponentQueryKey, fetchOpponentFn } from '.';

export const useFetchOpponentQuery= () => {
  return useQuery({
    queryKey: OpponentQueryKey,
    queryFn : fetchOpponentFn
  });
};