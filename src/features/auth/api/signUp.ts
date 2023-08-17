import axios from "axios";

import { SIGNUP_USER_URL } from "@/config/apiEndpoints";
import { AuthUser } from "..";
import { useSetRecoilState } from "recoil";
import { isAuthState } from "@/atoms";

export const useSignUp= () => {
  const setIsAuthenticated= useSetRecoilState<boolean>(isAuthState);

  async function isSignUp(data: AuthUser): Promise<void>{
    try {
      const formattedJsonData= JSON.stringify(data);
      const response= await axios.put( 
        SIGNUP_USER_URL, 
        formattedJsonData,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setIsAuthenticated(response.data.success);
    }
    catch(error) {
      console.log('error');
    }
  }

  return { isSignUp };
}