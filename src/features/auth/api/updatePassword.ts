import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USER_PASSWORD_URL } from '@/config/apiUrls';

export const updatePassword= ( password: string ): Promise<AxiosResponse<string>> => {
  return axios.patch( UPDATE_USER_PASSWORD_URL, password );
};