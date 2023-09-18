import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { FETCH_GAME_START_TIME_URL } from '@/config/apiUrls';

export const fetchStartTime= async(): Promise<object> => {
  const  startTime = await axios.get( FETCH_GAME_START_TIME_URL );
  return startTime;
};

export const useStartTime= () => {
  return useQuery({
    queryKey: [ 'query_startTime' ],
    queryFn : fetchStartTime,
  });
};