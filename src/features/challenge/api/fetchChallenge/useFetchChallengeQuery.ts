import { useQuery } from '@tanstack/react-query';

import { ChallengeQueryKey, fetchChallengeFn } from '.';
import { QueryConfig } from '@/lib/react-query';

type UseChallengeQueryOptions= {
  config?: QueryConfig<typeof fetchChallengeFn>
};

export const useFetchChallengeQuery= ({ config }: UseChallengeQueryOptions ) => {
  return useQuery({
    queryKey: ChallengeQueryKey,
    queryFn : fetchChallengeFn,
    ...config
  });
};