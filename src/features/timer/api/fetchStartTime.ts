import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { START_GAME_URL } from '@/config/apiUrls';

export const fetchStartTime= async() => {
  return await axios.get( START_GAME_URL );
};

export const useStartTime= () => {
  return useQuery({
    queryKey: [ 'query_startTime' ],
    queryFn : () => fetchStartTime(),
  });
};