import { DEFENCE_CODE_URL } from "@/config/apiEndpoints";
import { axios } from "@/lib/axios"

export const fetchCode= () => {
  return axios.get( DEFENCE_CODE_URL );
};