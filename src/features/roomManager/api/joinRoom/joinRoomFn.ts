import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { JoinRoomResponseType }    from '../types/responseTypes';
import { INVITE_ID_KEY, ROOM_URL } from '../constants';

export const joinRoomFn= async( inviteId: number ): Promise<AxiosResponse<JoinRoomResponseType>> => {
  const inviteIdJson= JSON.stringify({ [ INVITE_ID_KEY ]: inviteId });

  return await axios.put( ROOM_URL, inviteIdJson );
};