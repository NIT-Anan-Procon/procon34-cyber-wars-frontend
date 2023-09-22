import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { IS_LOGGED_IN_URL } from '../endpoints';
import { AuthenticatedResponseType } from '../types/responseTypes';

export const fetchAuthenticatedUserFn= async(): Promise<AxiosResponse<AuthenticatedResponseType>> => {
  return await axios.get( IS_LOGGED_IN_URL );
};