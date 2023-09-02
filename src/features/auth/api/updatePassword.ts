import axios from "axios";

import { SIGNIN_USER_URL } from "@/config/apiEndpoints";
import { ISSUCCESS_KEY } from "@/config/dataKeys";
import { AuthUser } from "..";
import { useSetRecoilState } from "recoil";
import { isAuthState } from "@/atoms";

export const useUpdatePassword= () => {
  const setIsAuthenticated= useSetRecoilState<boolean>(isAuthState);

  async function isUpdatePassword(password: AuthUser): Promise<void>{
    try {
      const formattedJsonData= JSON.stringify(password);
      const response= await axios.post( 
        SIGNIN_USER_URL, 
        formattedJsonData,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      //setIsAuthenticated(response.data.ISSUCCESS_KEY);
      setIsAuthenticated(response.data.success);
    }
    catch(error) {
      console.log('error');
    }
  }

  return { isUpdatePassword };
}