import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { SendFlagRequestType, SendFlagResponseType } from '../types';
import { ATTACK_SEND_KEY_URL, BATTLE_SEND_KEY_URL, FLAG_KEY } from '../constants';

export const sendFlagFn= async( phase: string, flag: SendFlagRequestType ): Promise<AxiosResponse<SendFlagResponseType>> => {
  const flagJson= JSON.stringify({ [ FLAG_KEY ]: flag });
  const endpoint= phase === 'battle' ? BATTLE_SEND_KEY_URL : ATTACK_SEND_KEY_URL;

  return await axios.post( endpoint, flagJson );
};