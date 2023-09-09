import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { CREATE_ROOM_URL } from '@/config/apiEndpoints';

export const createRoom= ( isDifficult: boolean ): Promise<AxiosResponse<number>> => {
  return axios.post( CREATE_ROOM_URL, isDifficult );
};