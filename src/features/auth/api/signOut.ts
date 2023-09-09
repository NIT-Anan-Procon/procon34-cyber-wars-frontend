import { axios } from '@/lib/axios';
import { SIGNOUT_USER_URL } from '@/config/apiEndpoints';

export const signOut= () => {
  return axios.delete( SIGNOUT_USER_URL );
};