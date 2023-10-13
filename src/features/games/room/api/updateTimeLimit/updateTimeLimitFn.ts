import { axios } from '@/lib/axios';
import { ROOM_URL, TimeLimitRequestType } from '..';

export const updateTimeLimitFn= async( updateTime: TimeLimitRequestType ): Promise<void> => {
  const updateTimeJson= JSON.stringify({ timeLimit: updateTime });

  return await axios.patch( ROOM_URL, updateTimeJson );
};