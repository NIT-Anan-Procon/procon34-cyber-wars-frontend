import { BATTLE_REVISION_URL } from '@/config/apiEndpoints';
import { axios } from '@/lib/axios';

export const fetchRevisionCode= () => {
  return axios.get( BATTLE_REVISION_URL );
}