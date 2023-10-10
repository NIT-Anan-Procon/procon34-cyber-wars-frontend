import { AxiosResponse } from 'axios';

import { axios }     from '@/lib/axios';
import { LOGIN_URL } from '../constants';
import { AuthResponseType, CredentialsDTO } from '../types';

export const loginFn= async( data: CredentialsDTO ): Promise<AxiosResponse<AuthResponseType>> => {
  return await axios.post( LOGIN_URL, data );
};