import { BATTLE_REVISION_URL } from '@/config/apiEndpoints';
import { axios } from '@/lib/axios';

export const fetchRevisionCode= async(): Promise<string> => {
  return await axios.get( BATTLE_REVISION_URL );
}