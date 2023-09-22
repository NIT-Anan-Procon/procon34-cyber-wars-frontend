import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { BATTLE_REVISION_URL, CodeResponseType } from '..';

export const fetchRevisionCodeFn= async(): Promise<AxiosResponse<CodeResponseType>> => {
  return await axios.get( BATTLE_REVISION_URL );
};