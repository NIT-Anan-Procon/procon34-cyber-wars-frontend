import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { ROOM_URL } from '@/config/apiUrls';

export const joinRoom= ( inputInviteId: number ): Promise<AxiosResponse<boolean>> => {
  return axios.put( ROOM_URL, inputInviteId );
};