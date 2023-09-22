import { AxiosResponse } from 'axios';

import { axios }     from '@/lib/axios';
import { LOGIN_URL } from './config/endpoints';
import { USER_NAME_KEY, USER_PASSWORD_KEY } from './config/responseKeys';
import { AuthResponseType } from './types/responseTypes';

type LogInCredentialsDTO= {
  [ USER_NAME_KEY ]    : string;
  [ USER_PASSWORD_KEY ]: string;
};

export const loginFn= async( data: LogInCredentialsDTO ): Promise<AxiosResponse<AuthResponseType>> => {
  return await axios.post( LOGIN_URL, data );
};