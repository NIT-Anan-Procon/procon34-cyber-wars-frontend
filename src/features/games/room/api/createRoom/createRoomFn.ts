import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { ROOM_URL, IS_DIFFICULT_KEY } from '../constants';

export const createRoomFn= async( isDifficult: boolean ): Promise<AxiosResponse<number>> => {
  const isDifficultJson= JSON.stringify({ [ IS_DIFFICULT_KEY ]: isDifficult });

  return await axios.post( ROOM_URL, isDifficultJson );
};