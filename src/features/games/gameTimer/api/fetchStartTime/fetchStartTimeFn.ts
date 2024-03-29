import { axios } from '@/lib/axios';
import { StartTimeResponseType } from '../types';
import { GAME_START_TIME_URL }   from '../constants';

export const fetchStartTimeFn= async(): Promise<StartTimeResponseType> => {
  return await axios.get( GAME_START_TIME_URL );
};