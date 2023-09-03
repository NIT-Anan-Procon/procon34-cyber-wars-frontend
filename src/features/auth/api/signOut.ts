import axios from "axios";


import { ISSUCCESS_KEY } from "./config/userAuth_keys";
import { useSetRecoilState } from "recoil";
import { isAuthState } from "@/atoms";
import { SIGNOUT_USER_URL } from "@/config/apiEndpoints";

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