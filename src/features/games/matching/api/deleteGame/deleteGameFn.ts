import { axios } from '@/lib/axios';
import { END_GAME_URL, REMATCH_KEY } from '..';
import { REMATCH_SUCCESSFUL } from '../types';

export const deleteGameFn= ( isRematch: boolean ): Promise<REMATCH_SUCCESSFUL> => {
  const rematchJson= JSON.stringify({ [ REMATCH_KEY ]: isRematch });
  
  return axios.delete( END_GAME_URL, { data: rematchJson });
};