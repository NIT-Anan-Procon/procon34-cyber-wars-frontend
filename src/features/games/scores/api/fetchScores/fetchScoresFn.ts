import { axios } from '@/lib/axios';
import { GAME_SCORES_URL, ScoresResponseType } from '..';

export const fetchScoresFn= (): Promise<ScoresResponseType> => {
  return axios.get( GAME_SCORES_URL );
};