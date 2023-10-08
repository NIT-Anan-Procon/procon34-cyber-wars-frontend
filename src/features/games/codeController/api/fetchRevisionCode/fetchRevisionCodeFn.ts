import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { BATTLE_REVISION_URL, RevisionCodeResponseType } from '..';

export const fetchRevisionCodeFn= async(): Promise<AxiosResponse<RevisionCodeResponseType>> => {
  return await axios.get( BATTLE_REVISION_URL );
};