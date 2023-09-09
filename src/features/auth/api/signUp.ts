import { axios } from '@/lib/axios';
import { AuthUser } from '..';
import { SIGNUP_USER_URL } from '@/config/apiEndpoints';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from '@/atoms';
import { ISSUCCESS_KEY } from '@/config/responseKeys';

export const useSignUp= () => {
  const setIsSuccessful= useSetRecoilState( isAuthState );

  async function isSignUp( data: AuthUser ): Promise<void>{
    const resData= await axios.post( SIGNUP_USER_URL, data );
    setIsSuccessful( resData[ISSUCCESS_KEY] );
  }

  return { isSignUp };
}