import { useQuery } from '@tanstack/react-query';

import { ScoresQueryKey, fetchScoresFn } from '..';
import { QueryConfig } from '@/lib/react-query';

type UseScoresQueryOptions= {
  config?: QueryConfig<typeof fetchScoresFn>;
};

export const useFetchScoresQuery= ({ config }: UseScoresQueryOptions ) => {
  return useQuery({
    queryKey: ScoresQueryKey,
    queryFn : fetchScoresFn
  });
};