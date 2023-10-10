import { axios }     from '@/lib/axios';
import { LOGIN_URL } from '../constants';
import { AuthResponseType, CredentialsDTO } from '../types';

export const loginFn= async( data: CredentialsDTO ): Promise<AuthResponseType> => {
  return await axios.post( LOGIN_URL, data );
};