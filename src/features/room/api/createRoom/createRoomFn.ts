import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { ROOM_URL, ROOM_DIFFICULT_KEY } from '../constants';

export const createRoomFn= async( isDifficult: boolean ): Promise<AxiosResponse<number>> => {
  const isDifficultJson= JSON.stringify({ [ ROOM_DIFFICULT_KEY ]: isDifficult });

  return await axios.post( ROOM_URL, isDifficultJson );
};