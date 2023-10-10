import { axios } from '@/lib/axios';
import { CHALLENGE_URL } from '../constants';
import { ChallengeResponseType } from '../types';


export const fetchChallengeFn= async(): Promise<ChallengeResponseType> => {
  return await axios.get( CHALLENGE_URL );
};