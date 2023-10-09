import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { END_GAME_URL, REMATCH_KEY } from '..';

export const deleteGameFn= ( isRematch: boolean ): Promise<AxiosResponse<void>> => {
  const rematchJson= JSON.stringify({ [ REMATCH_KEY ]: isRematch });
  
  return axios.delete( END_GAME_URL, { data: rematchJson });
};