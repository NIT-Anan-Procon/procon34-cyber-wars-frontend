import { AxiosResponse } from 'axios';

import { axios } from '@/lib/axios';
import { AuthResponseType } from '../types/responseTypes';
import { REGISTER_URL }     from '../constants/endpoints';
import { CredentialsDTO }   from '../types/requestTypes';

export const registerFn= async( data: CredentialsDTO ): Promise<AxiosResponse<AuthResponseType>> => {
  return await axios.post( REGISTER_URL, data );
};