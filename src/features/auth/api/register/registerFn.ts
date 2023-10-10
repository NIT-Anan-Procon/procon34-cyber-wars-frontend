import { axios } from '@/lib/axios';
import { AuthResponseType, CredentialsDTO } from '../types';
import { REGISTER_URL } from '../constants';

export const registerFn= async( data: CredentialsDTO ): Promise<AuthResponseType> => {
  return await axios.post( REGISTER_URL, data );
};