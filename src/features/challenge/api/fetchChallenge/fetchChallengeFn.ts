import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { ChallengeResponseType } from '../types';
import { CHALLENGE_URL }         from '../constants';

export const fetchChallengeFn= async(): Promise<AxiosResponse<ChallengeResponseType>> => {
  return await axios.get( CHALLENGE_URL );
};