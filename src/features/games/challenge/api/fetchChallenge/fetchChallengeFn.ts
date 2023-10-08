import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { CHALLENGE_URL } from '../constants';
import { ChallengeResponseType } from '../types';


export const fetchChallengeFn= async(): Promise<AxiosResponse<ChallengeResponseType>> => {
  return await axios.get( CHALLENGE_URL );
};