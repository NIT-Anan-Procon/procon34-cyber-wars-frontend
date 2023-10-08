import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { StartTimeResponseType } from '../types';
import { GAME_START_TIME_URL }   from '../constants';

export const fetchStartTimeFn= async(): Promise<AxiosResponse<StartTimeResponseType>> => {
  return await axios.get( GAME_START_TIME_URL );
};