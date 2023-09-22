import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { CodeResponseType, DEFENCE_CODE_URL } from '..';

export const fetchCodeFn= async(): Promise<AxiosResponse<CodeResponseType>> => {
  return await axios.get( DEFENCE_CODE_URL );
};