import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { ROOM_URL } from '../constants/endpoint';
import { ROOM_DIFFICULT_KEY } from '../constants/responseKeys';

export const createRoomFn= async( isDifficult: boolean ): Promise<AxiosResponse<number>> => {
  const postData= JSON.stringify({ [ ROOM_DIFFICULT_KEY ]: isDifficult });

  return await axios.post( ROOM_URL, postData );
};