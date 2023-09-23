import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { HINT_URL } from '../constants';
import { VULNERABILITY_ID_KEY } from '../constants';

export const showHintFn= async( vulnerabilityId: number ): Promise<AxiosResponse<void>> => {
  const vulnerabilityIdJson= JSON.stringify({ [ VULNERABILITY_ID_KEY ]: vulnerabilityId });
  
  return await axios.post( HINT_URL, vulnerabilityIdJson );
};