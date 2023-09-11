import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { ROOM_URL } from '@/config/apiEndpoints';

export const joinRoom= ( inputInviteId: number ): Promise<AxiosResponse<boolean>> => {
  return axios.post( ROOM_URL, inputInviteId );
};