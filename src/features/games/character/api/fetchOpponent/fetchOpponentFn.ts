import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { GAME_OPPONENT_NAME_URL, OpponentResponseType } from '..';

export const fetchOpponentFn= async(): Promise<AxiosResponse<OpponentResponseType>> => {
  return await axios.get( GAME_OPPONENT_NAME_URL );
};