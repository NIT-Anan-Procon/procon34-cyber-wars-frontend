import { axios } from '@/lib/axios';
import { START_GAME_URL } from '@/config/apiEndpoints';

export const getStartTime= () => {
  return axios.get( START_GAME_URL );
}