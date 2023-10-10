import { axios }    from '@/lib/axios';
import { ROOM_URL } from '../constants';
import { CreateRoomResponseType } from '..';

export const createRoomFn= async(): Promise<CreateRoomResponseType> => {
  return await axios.post( ROOM_URL );
};