import { AxiosResponse } from 'axios';

import { axios }           from '@/lib/axios';
import { AuthUser }        from '..';
import { SIGNUP_USER_URL } from '@/config/apiEndpoints';

export const signUp= ( data: AuthUser ): Promise<AxiosResponse<boolean>> => {
  return axios.post( SIGNUP_USER_URL, data );
}