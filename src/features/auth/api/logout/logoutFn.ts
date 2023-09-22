import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { LOGOUT_URL } from '../endpoints';

export const logoutFn= async(): Promise<AxiosResponse<void>> => {
  return await axios.post( LOGOUT_URL );
};