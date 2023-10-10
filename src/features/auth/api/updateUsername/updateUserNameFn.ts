import { axios } from '@/lib/axios';
import { UPDATE_USERNAME_URL, USER_NAME_KEY } from '../constants';
import { AuthResponseType } from '../types';

export const updateUsernameFn= async( name: string ): Promise<AuthResponseType> => {
  const userNameJson= JSON.stringify({ [ USER_NAME_KEY ]: name });

  return await axios.patch( UPDATE_USERNAME_URL, userNameJson );
};