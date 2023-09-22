import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USER_PASSWORD_URL } from './config/endpoints';

export const updatePassword= async( password: string ): Promise<AxiosResponse<string>> => {
  return await axios.patch( UPDATE_USER_PASSWORD_URL, password );
};