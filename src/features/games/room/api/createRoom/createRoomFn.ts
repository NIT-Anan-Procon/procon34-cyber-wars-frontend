import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { ROOM_URL } from '../constants';

export const createRoomFn= async(): Promise<AxiosResponse<number>> => {
  return await axios.post( ROOM_URL );
};