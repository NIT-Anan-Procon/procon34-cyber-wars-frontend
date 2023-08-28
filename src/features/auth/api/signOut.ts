import axios from "axios";

import { SIGNOUT_USER_URL } from "./config/userAuth_endpoints";
import { ISSUCCESS_KEY } from "./config/userAuth_keys";
import { useSetRecoilState } from "recoil";
import { isAuthState } from "@/atoms";

export const useSignOut= () => {
  const setIsAuthenticated= useSetRecoilState<boolean>(isAuthState);

  async function signOut(): Promise<void>{
    try {
      const response= await axios.delete( SIGNOUT_USER_URL )
      setIsAuthenticated(response.data.ISSUCCESS_KEY);
    }
    catch(error) {
      console.log('error');
    }
  }

  return { signOut };
}