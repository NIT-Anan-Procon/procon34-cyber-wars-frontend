import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';
import { GAME_OPPONENT_NAME_URL } from '@/config/apiUrls';



export const fetchOpponentUser= async() => {
  return await axios.get( GAME_OPPONENT_NAME_URL );
};

type QueryFnType= typeof fetchOpponentUser;

type UseOpponentUserQueryOptions= {
  config?: QueryConfig<QueryFnType>
};

export const useOpponentUserQuery= ({ config }: UseOpponentUserQueryOptions ) => {
  return useQuery({
    queryKey: [ 'query_opponentUser' ],
    queryFn : () => fetchOpponentUser(),
    ...config
  })
};