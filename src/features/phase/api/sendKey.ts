import { ATTACK_SEND_KEY_URL } from "@/config/apiEndpoints";
import { axios } from "@/lib/axios"

export const sendKey= () => {
  return axios.post( ATTACK_SEND_KEY_URL );
}