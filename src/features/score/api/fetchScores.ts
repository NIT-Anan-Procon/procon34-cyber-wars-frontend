import { useQuery } from '@tanstack/react-query';

import { GAME_SCORES_URL } from '@/config/apiUrls';
import { axios } from '@/lib/axios';

export const fetchScores= async() => {
  return await axios.get( GAME_SCORES_URL );
};

export const useScores= () => {
  return useQuery({
    queryKey: [ 'query_scores' ],
    queryFn : () => fetchScores(),
  });
};