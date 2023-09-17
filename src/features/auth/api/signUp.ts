import { axios } from '@/lib/axios';
import { AuthUser } from '..';
import { SIGNUP_USER_URL } from '@/config/apiUrls';
import { useIsAuthenticated } from './hook/useIsAuthenticated';
import { ISSUCCESS_KEY } from '@/config/responseKeys';

export const useSignUp= () => {
  const { setIsAuthenticated }= useIsAuthenticated(ISSUCCESS_KEY);

  async function isSignUp( data: AuthUser ): Promise<void>{
    const resData= await axios.post( SIGNUP_USER_URL, data );
    setIsAuthenticated( resData );
  }

  return { isSignUp };
}