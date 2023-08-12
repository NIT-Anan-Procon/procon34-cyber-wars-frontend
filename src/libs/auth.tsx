import axios from 'axios';
import { useSetRecoilState } from 'recoil';

import { isAuthState } from '@/atoms';
import { AuthUser } from '@/features/auth';
import { 
  SIGNUP_USER_URL, 
  SIGNIN_USER_URL, 
  SIGNOUT_USER_URL 
} from '@/config/apiEndpoints';

interface UseAuth {
  isSignIn: (data: AuthUser) => Promise<void>;
  isSignUp: (data: AuthUser) => Promise<void>;
  signOut : () => void;
}

export const useAuth= (): UseAuth => {
  const setIsAuthenticated= useSetRecoilState<boolean>(isAuthState);
  
  async function authServerCall(
    urlEndpoint: string,
    data: AuthUser,
  ): Promise<boolean> {
    try {
      const response= await axios.post(urlEndpoint, data, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      return true;
    }
    catch (error) {
      console.log('error');
      throw error;
    }
  }

  async function isSignIn(data: AuthUser): Promise<void>{
    const isAuthenticated= await authServerCall(SIGNIN_USER_URL, data);
    setIsAuthenticated((isAuthenticated));
  }

  async function isSignUp(data: AuthUser): Promise<void> {
    const isAuthenticated= await authServerCall(SIGNUP_USER_URL, data);
    setIsAuthenticated(isAuthenticated);
  }

  async function signOut(): Promise<void> {
    try {
      await axios.patch(SIGNOUT_USER_URL);
      setIsAuthenticated(false);   
    }
    catch (error) {
      console.log('error');
    } 
  }

  return {
    isSignIn,
    isSignUp,
    signOut 
  };
};
