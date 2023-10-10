import { axios } from '@/lib/axios';
import { BATTLE_REVISION_URL, RevisionResponseType } from '..';

export const fetchRevisionCodeFn= async(): Promise<RevisionResponseType> => {
  return await axios.get( BATTLE_REVISION_URL );
};