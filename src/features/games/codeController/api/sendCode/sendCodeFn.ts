import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { CODE_KEY, DEFENCE_CODE_URL, SendCodeResponseType } from '..';

export const sendCodeFn= async( code: string ): Promise<AxiosResponse<SendCodeResponseType>> => {
  const sendCodeJson= JSON.stringify({ [ CODE_KEY ]: code });

  return await axios.put( DEFENCE_CODE_URL, sendCodeJson );
};