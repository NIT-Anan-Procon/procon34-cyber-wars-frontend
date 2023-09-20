import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { ATTACK_CHALLENGE_URL } from '@/config/apiUrls';
import { ChallengeDataType } from '../types';
import { QueryConfig } from '@/lib/react-query';


export const fetchChallenge= async(): Promise<ChallengeDataType> => {
  const resChallengeData: ChallengeDataType= await axios.get( ATTACK_CHALLENGE_URL );

  return resChallengeData;
};

type QueryFnType = typeof fetchChallenge;

type UseChallengeQueryOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useChallengeQuery= ({ config } : UseChallengeQueryOptions) => {
  return useQuery<ChallengeDataType>({
    queryKey: [ 'query_challenge' ],
    queryFn : fetchChallenge,
    ...config
  });
};