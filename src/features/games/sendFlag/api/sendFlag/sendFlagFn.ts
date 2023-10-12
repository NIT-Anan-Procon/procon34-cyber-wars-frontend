import { axios } from '@/lib/axios';
import { SendFlagResponseType } from '../types';

export const sendFlagFn= async({ endpoint, flag }: { endpoint: string, flag: string }): Promise<SendFlagResponseType> => {
  const flagJson= JSON.stringify({ key: flag });

  return await axios.post( endpoint, flagJson );
};