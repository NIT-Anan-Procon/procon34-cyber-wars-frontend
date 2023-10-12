import { axios } from '@/lib/axios';
import { DEFENCE_REVISION_URL, MyRevisionPathResponseType } from '..';

export const fetchMyRevisionPathFn= async(): Promise<MyRevisionPathResponseType> => {
  return await axios.get( DEFENCE_REVISION_URL );
};