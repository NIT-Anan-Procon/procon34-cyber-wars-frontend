import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';
import { GAME_SCORES_URL } from '@/config/apiUrls';
import { SCORES_KEY } from '@/config/responseKeys';

type FetchUserResType= {
  [ SCORES_KEY ]: Array<number>;
};

export const fetchScores= async() => {
  return await axios.get( GAME_SCORES_URL );
};

type QueryFn= typeof fetchScores;

type UseScoresQueryOptions= {
  config?: QueryConfig<QueryFn>;
};

export const useScoresQuery= ({ config }: UseScoresQueryOptions ) => {
  return useQuery({
    queryKey: [ 'query_scores' ],
    queryFn : () => fetchScores(),
    ...config
  });
};