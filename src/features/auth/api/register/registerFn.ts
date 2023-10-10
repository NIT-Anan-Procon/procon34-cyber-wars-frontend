import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { AuthResponseType, CredentialsDTO } from '../types';
import { REGISTER_URL } from '../constants';

export const registerFn= async( data: CredentialsDTO ): Promise<AxiosResponse<AuthResponseType>> => {
  return await axios.post( REGISTER_URL, data );
};