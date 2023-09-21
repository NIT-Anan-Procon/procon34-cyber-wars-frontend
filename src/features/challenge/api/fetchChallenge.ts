import { previewCodePathState, vulnerabilitiesState } from "@/atoms";
import { ATTACK_CHALLENGE_URL } from "@/config/apiUrls";
import { CODE_PATH_KEY, VULNERABILITIES_KEY } from "@/config/responseKeys";
import { axios } from "@/lib/axios";
import { useSetRecoilState } from "recoil";
import { useQuery } from '@tanstack/react-query';
import { ChallengeDataType } from '../types';
import { QueryConfig } from '@/lib/react-query';


export const useFetchChallenge= () => {
  const setPreviewPath= useSetRecoilState( previewCodePathState );
  const setVulnerabilities= useSetRecoilState( vulnerabilitiesState );

  async function fetchChallenge() {
    return await axios.get( ATTACK_CHALLENGE_URL )
    .then((res) => {
      setPreviewPath( res[CODE_PATH_KEY ] ),
      setVulnerabilities( res[ VULNERABILITIES_KEY] )
    })
  };

  return { fetchChallenge };
};

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