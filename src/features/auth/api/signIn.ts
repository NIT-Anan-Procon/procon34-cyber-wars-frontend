import axios from "axios";

import { SIGNIN_USER_URL } from "@/config/apiEndpoints";
import { AuthUser } from "..";
import { useSetRecoilState } from "recoil";
import { isAuthState } from "@/atoms";
import { authenticatedUserState } from "@/atoms/userStates";

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
      setUserData(data);
      setIsAuthenticated(true);
    }
    catch(error) {
      console.log('error');
    }
  }

  return { isSignIn };
}