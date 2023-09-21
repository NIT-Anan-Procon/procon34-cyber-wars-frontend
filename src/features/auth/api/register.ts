import { AxiosResponse } from 'axios';

import { axios }        from '@/lib/axios';
import { REGISTER_URL } from './config/endpoints';
import { USER_NAME_KEY, USER_PASSWORD_KEY } from './config/responseKeys';
import { IsSuccessfulType } from './types/responseTypes';

type RegisterCredentialsDTO= {
  [ USER_NAME_KEY ]    : string;
  [ USER_PASSWORD_KEY ]: string;
};

export const registerFn= async( data: RegisterCredentialsDTO ): Promise<AxiosResponse<IsSuccessfulType>> => {
  return await axios.post( REGISTER_URL, data );
};