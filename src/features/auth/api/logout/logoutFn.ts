import { axios } from '@/lib/axios';
import { LOGOUT_URL } from '../constants';

export const logoutFn= async(): Promise<void> => {
  return await axios.delete( LOGOUT_URL );
};