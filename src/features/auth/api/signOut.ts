import { axios } from '@/lib/axios';
import { SIGNOUT_USER_URL } from '@/config/apiUrls';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from '@/atoms';

export const useSignOut= () => {
  const setSignOut= useSetRecoilState( isAuthState );

  async function isSignOut() {
    const signOut= await axios.delete( SIGNOUT_USER_URL );
    setSignOut( false );
  };

  return { isSignOut };
};