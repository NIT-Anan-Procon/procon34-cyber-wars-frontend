import { axios } from '@/lib/axios';
import { AuthUser } from '..';
import { SIGNIN_USER_URL } from '@/config/apiEndpoints';
import { useIsAuthenticated } from './hook/useIsAuthenticated';
import { AxiosResponse } from 'axios';

export const useSignIn= () => {
  const { setIsAuthenticated }= useIsAuthenticated();

  async function isSignIn(data: AuthUser): Promise<void>{
    const resData= await axios.post( SIGNIN_USER_URL, data );
    setIsAuthenticated( resData );
  };

  return { isSignIn };
};