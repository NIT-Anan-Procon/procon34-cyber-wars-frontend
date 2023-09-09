import { axios } from '@/lib/axios';
import { AuthUser } from '..';
import { SIGNUP_USER_URL } from '@/config/apiEndpoints';
import { useIsAuthenticated } from './hook/useIsAuthenticated';

export const useSignUp= () => {
  const { setIsAuthenticated }= useIsAuthenticated();

  async function isSignUp( data: AuthUser ): Promise<void>{
    const resData= await axios.post( SIGNUP_USER_URL, data );
    setIsAuthenticated( resData );
  }

  return { isSignUp };
}