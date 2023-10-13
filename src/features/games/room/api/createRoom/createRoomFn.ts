import { axios }    from '@/lib/axios';
import { ROOM_URL } from '../constants';
import { CreateRoomResponseType, TimeLimitRequestType } from '..';

export const createRoomFn= async( timeLimit: TimeLimitRequestType ): Promise<CreateRoomResponseType> => {
  const defaultTimeLimitJson= JSON.stringify({ timeLimit: timeLimit });  
  return await axios.post( ROOM_URL, defaultTimeLimitJson );
};