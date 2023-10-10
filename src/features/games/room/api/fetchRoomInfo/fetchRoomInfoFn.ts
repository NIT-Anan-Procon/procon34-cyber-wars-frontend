import { axios }    from '@/lib/axios';
import { ROOM_URL } from '../constants';
import { RoomInfoResponseType } from '../types';

export const fetchRoomInfoFn= (): Promise<RoomInfoResponseType> => {
  return axios.get( ROOM_URL );
};