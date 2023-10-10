import { AxiosResponse } from 'axios';

import { axios }    from '@/lib/axios';
import { HINT_URL } from '../constants';

export const showHintFn= async(): Promise<AxiosResponse<void>> => {
  return await axios.post( HINT_URL );
};