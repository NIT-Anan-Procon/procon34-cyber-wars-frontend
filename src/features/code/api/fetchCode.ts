import { useQuery } from '@tanstack/react-query';

import { DEFENCE_CODE_URL } from '@/config/apiEndpoints';
import { axios } from '@/lib/axios';


export const fetchCode= async(): Promise<string> => {
  return await axios.get( DEFENCE_CODE_URL );
};

export const useFetchCode= () => {
  return useQuery({
    queryKey: [ 'query_codeData' ],
    queryFn : () => fetchCode(),
  });
};