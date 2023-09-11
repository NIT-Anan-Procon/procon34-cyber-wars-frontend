import { DEFENCE_CODE_URL } from "@/config/apiEndpoints";
import { axios } from "@/lib/axios"

export const sendCode = () => {
  return axios.put( DEFENCE_CODE_URL );
}