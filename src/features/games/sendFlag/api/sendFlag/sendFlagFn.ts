import { axios } from '@/lib/axios';
import { SendFlagResponseType } from '../types';
import { FLAG_KEY } from '../constants';

export const sendFlagFn= async({ endpoint, flag }: { endpoint: string, flag: string }): Promise<SendFlagResponseType> => {
  const flagJson= JSON.stringify({ [ FLAG_KEY ]: flag });

  return await axios.post( endpoint, flagJson );
};