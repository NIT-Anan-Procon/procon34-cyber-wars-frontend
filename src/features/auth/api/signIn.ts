import axios from "axios";

import { SIGNIN_USER_URL } from "./config/userAuth_endpoints";
import { ISSUCCESS_KEY } from './config/userAuth_keys';
import { AuthUser } from "..";
import { useSetRecoilState } from "recoil";
import { authenticatedUserState, isAuthState } from "@/atoms";

export const useSignIn= () => {
  const setIsAuthenticated= useSetRecoilState<boolean>(isAuthState);
  const setUserData= useSetRecoilState(authenticatedUserState);

  async function isSignIn(data: AuthUser): Promise<void>{
    try {
      const formattedJsonData= JSON.stringify(data);
      const response= await axios.post( 
        SIGNIN_USER_URL, 
        formattedJsonData,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setIsAuthenticated(response.data.ISSUCCESS_KEY);
      setUserData(data);
    }
    catch(error) {
      console.log('error');
    }
  }

  return { isSignIn };
}