import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { ROOM_URL } from '../constants';
import { RoomInfoResponseType } from '../types';

export const fetchRoomInfoFn= async(): Promise<AxiosResponse<RoomInfoResponseType>> => {
  return await axios.get( ROOM_URL );
};