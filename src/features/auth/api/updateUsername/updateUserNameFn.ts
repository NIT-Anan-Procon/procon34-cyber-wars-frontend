import { axios } from '@/lib/axios';
import { UPDATE_USERNAME_URL } from '../constants';
import { AuthResponseType } from '../types';

export const updateUsernameFn= async( name: string ): Promise<AuthResponseType> => {
  const userNameJson= JSON.stringify({ name: name });

  return await axios.patch( UPDATE_USERNAME_URL, userNameJson );
};