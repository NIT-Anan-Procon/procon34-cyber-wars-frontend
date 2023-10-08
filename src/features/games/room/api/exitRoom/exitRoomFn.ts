import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { ROOM_URL } from '../constants';

export const exitRoomFn= async(): Promise<AxiosResponse<void>> => {
  return await axios.delete( ROOM_URL );
};