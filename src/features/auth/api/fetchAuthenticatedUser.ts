import { axios } from '@/lib/axios';
import { IS_LOGGED_IN_URL } from './config/endpoints';

export const fetchAuthenticatedUser= async() => {
  return await axios.get( IS_LOGGED_IN_URL );
};