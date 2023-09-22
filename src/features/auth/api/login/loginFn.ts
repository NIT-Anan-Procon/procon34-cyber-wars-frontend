import { AxiosResponse } from 'axios';

import { axios }     from '@/lib/axios';
import { LOGIN_URL } from '../endpoints';
import { AuthResponseType } from '../types/responseTypes';
import { CredentialsDTO }   from '../types/requestTypes';

export const loginFn= async( data: CredentialsDTO ): Promise<AxiosResponse<AuthResponseType>> => {
  return await axios.post( LOGIN_URL, data );
};