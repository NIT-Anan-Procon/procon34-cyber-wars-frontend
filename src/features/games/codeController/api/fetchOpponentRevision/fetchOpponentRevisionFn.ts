import { axios } from '@/lib/axios';
import { BATTLE_REVISION_URL, OpponentRevisionResponseType } from '..';

export const fetchOpponentRevisionFn= async(): Promise<OpponentRevisionResponseType> => {
  return await axios.get( BATTLE_REVISION_URL );
};