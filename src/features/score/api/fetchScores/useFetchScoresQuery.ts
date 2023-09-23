import { useQuery } from '@tanstack/react-query';

import { ScoresQueryKey, fetchScoresFn } from '..';

export const useFetchScoresQuery= () => {
  return useQuery({
    queryKey: ScoresQueryKey,
    queryFn : fetchScoresFn
  });
};