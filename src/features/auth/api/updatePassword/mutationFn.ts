import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USER_PASSWORD_URL } from '../constants/endpoints';
import { AuthResponseType }         from '../types/responseTypes';

export const updatePasswordFn= async( password: string ): Promise<AxiosResponse<AuthResponseType>> => {
  return await axios.patch( UPDATE_USER_PASSWORD_URL, password );
};