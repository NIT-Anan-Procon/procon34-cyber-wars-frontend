import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USER_PASSWORD_URL, USER_PASSWORD_KEY } from '../constants';
import { AuthResponseType } from '../types';

export const updatePasswordFn= async( password: string ): Promise<AxiosResponse<AuthResponseType>> => {
  const passwardJson= { [ USER_PASSWORD_KEY ]: password };
  return await axios.patch( UPDATE_USER_PASSWORD_URL, passwardJson );
};