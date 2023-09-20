import { useQuery } from '@tanstack/react-query';

import { IS_SIGNEDIN_URL } from '@/config/apiUrls';
import { axios } from '@/lib/axios';

export const fetchAuthenticatedUser= async() => {
  return await axios.get( IS_SIGNEDIN_URL );
};

export const useAuthUser= () => {
  return useQuery({
    queryKey: [ 'query_authenticatedUser' ],
    queryFn : () => fetchAuthenticatedUser(),
  });
};