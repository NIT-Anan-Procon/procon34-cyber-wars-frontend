import { axios } from '@/lib/axios';
import { AuthUser } from '..';
import { SIGNIN_USER_URL } from '@/config/apiUrls';
import { useIsAuthenticated } from './hook/useIsAuthenticated';
import { ISSUCCESS_KEY } from '@/config/responseKeys';
import { IsSuccessType } from './types/responseTypes';

export const useSignIn= () => {
  const { setIsAuthenticated }= useIsAuthenticated( ISSUCCESS_KEY );

  async function isSignIn(data: AuthUser): Promise<void>{
    const resData: IsSuccessType = await axios.post( SIGNIN_USER_URL, data );
    setIsAuthenticated( resData );
  };

  return { isSignIn };
};