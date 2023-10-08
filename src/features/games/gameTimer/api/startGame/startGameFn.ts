import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { START_GAME_URL } from '..';

export const startGameFn= async(): Promise<AxiosResponse<void>> => {
  return await axios.patch( START_GAME_URL );
};