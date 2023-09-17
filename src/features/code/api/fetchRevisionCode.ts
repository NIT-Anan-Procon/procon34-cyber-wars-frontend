import { useQuery } from '@tanstack/react-query';

import { BATTLE_REVISION_URL } from '@/config/apiUrls';
import { axios } from '@/lib/axios';

export const fetchRevisionCode= async(): Promise<string> => {
  return await axios.get( BATTLE_REVISION_URL );
};

export const useFetchRevisionCode= () => {
  return useQuery({
    queryKey: [ 'query_revisionCode' ],
    queryFn : () => fetchRevisionCode(),
  });
};