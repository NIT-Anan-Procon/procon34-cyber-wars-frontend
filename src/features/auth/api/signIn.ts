import { axios } from '@/lib/axios';
import { AuthUser } from '..';
import { SIGNIN_USER_URL } from '@/config/apiEndpoints';
import { ISSUCCESS_KEY } from '@/config/responseKeys';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from '@/atoms';

export const useSignIn= () => {
  const setIsSuccessful= useSetRecoilState( isAuthState );

  async function isSignIn(data: AuthUser): Promise<void>{
    const resData= await axios.post( SIGNIN_USER_URL, data );
    setIsSuccessful(resData[ISSUCCESS_KEY]);
  }

  return { isSignIn };
}