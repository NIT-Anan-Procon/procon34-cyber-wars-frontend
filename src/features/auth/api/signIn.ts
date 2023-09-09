import { AxiosResponse } from 'axios';

import { axios }           from '@/lib/axios';
import { AuthUser }        from '..';
import { SIGNIN_USER_URL } from '@/config/apiEndpoints';

export const signIn= ( data: AuthUser ): Promise<AxiosResponse<boolean>> => {
  return axios.post( SIGNIN_USER_URL, data );
};