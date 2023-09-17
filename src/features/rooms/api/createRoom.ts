import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { ROOM_URL } from '@/config/apiUrls';

export const createRoom= ( isDifficult: boolean ): Promise<AxiosResponse<number>> => {
  return axios.post( ROOM_URL, isDifficult );
};