import { axios } from '@/lib/axios';
import { ROOM_URL } from '../constants';

export const exitRoomFn= async(): Promise<[]> => {
  return await axios.delete( ROOM_URL );
};