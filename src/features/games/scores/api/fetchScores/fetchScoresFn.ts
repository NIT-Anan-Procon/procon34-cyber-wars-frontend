import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { GAME_SCORES_URL, ScoresResponseType } from '..';

export const fetchScoresFn= async(): Promise<AxiosResponse<ScoresResponseType>> => {
  return await axios.get( GAME_SCORES_URL );
};