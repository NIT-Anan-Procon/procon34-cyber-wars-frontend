import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { UPDATE_USERNAME_URL } from '../endpoints';
import { AuthResponseType }    from '../types/responseTypes';

export const updateUserNameFn= ( name: string ): Promise<AxiosResponse<AuthResponseType>> => {
  return axios.patch( UPDATE_USERNAME_URL, name );
};