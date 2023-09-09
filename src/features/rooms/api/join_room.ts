import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { JOIN_ROOM_URL } from '@/config/apiEndpoints';

export const joinRoom= ( inputInviteId: number ): Promise<AxiosResponse<boolean>> => {
  return axios.post( JOIN_ROOM_URL, inputInviteId );
};