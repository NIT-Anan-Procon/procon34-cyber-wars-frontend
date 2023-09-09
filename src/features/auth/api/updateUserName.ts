import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USER_NAME_URL } from '@/config/apiEndpoints';

export const useUpdateUserName= ( name: string ): Promise<AxiosResponse<string>> => {
  return axios.patch( UPDATE_USER_NAME_URL, name );
}