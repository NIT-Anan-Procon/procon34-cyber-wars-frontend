import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USERNAME_URL } from './config/endpoints';

export const updateUserName= ( name: string ): Promise<AxiosResponse<string>> => {
  return axios.patch( UPDATE_USERNAME_URL, name );
};