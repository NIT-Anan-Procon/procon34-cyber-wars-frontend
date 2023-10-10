import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { SendFlagResponseType } from '../types';
import { FLAG_KEY } from '../constants';

export const sendFlagFn= async({ endpoint, flag }: { endpoint: string, flag: string }): Promise<AxiosResponse<SendFlagResponseType>> => {
  const flagJson= JSON.stringify({ [ FLAG_KEY ]: flag });

  return await axios.post( endpoint, flagJson );
};